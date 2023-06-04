const tags = new Map()

const activity = document.createElement('div')
activity.setAttribute('class', 'tag--activity')
activity.append('Activity')
tags.set('act', activity)

const collaborative = document.createElement('div')
collaborative.setAttribute('class', 'tag--group')
collaborative.append('Collaborative')
tags.set('grp', collaborative)

const assessed = document.createElement('div')
assessed.setAttribute('class', 'tag--assessment')
assessed.append('Assessed')
tags.set('exm', assessed)

const media = document.createElement('div')
media.setAttribute('class', 'tag--media')
media.append('Media')
tags.set('med', media)



document.addEventListener('DOMContentLoaded', function () {
    const activitiyContainers = document.querySelectorAll('.task-activity');

    activitiyContainers.forEach((activitiyContainer) => {
        const activityTitleElement = activitiyContainer.querySelector('.task-activity__name')
        const activityTagsContainer = activitiyContainer.querySelector('.task-activity__tags')

        const classNameWithActivityLabels = activityTitleElement.classList[1]
        const activityLabels = classNameWithActivityLabels.split('-')

        activityLabels.forEach((label) => {
            tags.get(label) && activityTagsContainer.append(tags.get(label).cloneNode(true))
        })
    })
});