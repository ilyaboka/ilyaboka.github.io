const firstWorkingDay = new Date(2020, 0, 14);
const firstWorkingDayOnLastJob = new Date(2021, 7, 30);

function calculateWorkExperience(startDate) {
    const now = new Date();
    const totalMonths
        =
        (now.getFullYear() - startDate.getFullYear()) * 12
        + now.getMonth() - startDate.getMonth()
        - (startDate.getDate() > now.getDate() ? 1 : 0)
    ;

    return {months: totalMonths % 12, years: Math.floor(totalMonths / 12)};
}

const totalWorkExperience = calculateWorkExperience(firstWorkingDay);
const workExperienceAtLastJob
    = calculateWorkExperience(firstWorkingDayOnLastJob);


document.getElementById('months-of-total-experience').innerText
    = totalWorkExperience.months.toString();
document.getElementById('years-of-total-experience').innerText
    = totalWorkExperience.years.toString();

document.getElementById('months-of-experience-at-last-job').innerText
    = workExperienceAtLastJob.months.toString();
document.getElementById('years-of-experience-at-last-job').innerText
    = workExperienceAtLastJob.years.toString();
