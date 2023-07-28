import i18n from 'i18next';
import { exerciseRespnose } from './../serverResponseInterface';

function createExerciseInfoListItem(
  title: string,
  info: string | null
): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('info-list__item');

  const elementTitle = document.createElement('div');
  elementTitle.classList.add('info-list__item-title');
  elementTitle.innerText = title;

  const elementInfo = document.createElement('div');
  elementInfo.classList.add('info-list__item-info');
  elementInfo.innerText = `${info || `n/a`}`;

  wrapper.append(elementTitle, elementInfo);

  return wrapper;
}

export default async function fillExerciseFields(
  data: exerciseRespnose
): Promise<void> {
  const exerciseTitle = document.getElementsByClassName(
    'exercise__title'
  )[0] as HTMLElement;

  if (exerciseTitle) {
    exerciseTitle.innerText = data.name || i18n.t('exercise.fetchError.name');
  }

  const exerciseDescription = document.getElementsByClassName(
    'exercise__description'
  )[0] as HTMLElement;

  if (exerciseDescription) {
    exerciseDescription.innerText =
      data.description || i18n.t('exercise.fetchError.description');
  }

  const exerciseInfo = document.getElementsByClassName(
    'exercise__info-list'
  )[0] as HTMLElement;

  if (exerciseInfo) {
    const {
      Musclse: infoMuscle,
      Type: infoType,
      equipment: infoEquipment,
    } = data;

    exerciseInfo.replaceChildren(
      createExerciseInfoListItem(i18n.t('exercise.type'), infoType),
      createExerciseInfoListItem(i18n.t('exercise.equipment'), infoEquipment),
      createExerciseInfoListItem(
        i18n.t('exercise.muscle'),
        infoMuscle.join(',')
      )
    );
  }

  const exerciseVideo = document.getElementsByClassName(
    'exercise__video'
  )[0] as HTMLIFrameElement;

  if (exerciseVideo && data.YouTube) {
    const videoID = data.YouTube.split('watch?v=')?.pop()?.split('&')[0] || '';
    const embed = `https://www.youtube.com/embed/${videoID}?autoplay=0&modestbranding=1`;
    exerciseVideo.src = embed;
  }
}
