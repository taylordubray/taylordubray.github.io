function GetCurrentYear()
{
    var date = new Date();
    var currentYear = date.getFullYear();

    document.getElementById("copyrightdate").innerHTML = currentYear;
}

function GetCurrentDate()
{
    var date = new Date();

    var dayOfWeek = date.toLocaleDateString("en-gb", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); 

    document.getElementById("currentdate").innerHTML = dayOfWeek;
}

function ShowAnnouncement()
{
    var pancakeAnnouncement = document.getElementsByClassName("pancakehide")[0];
    
    var date = new Date();

    if (date.getDay() == 5)
    {
        pancakeAnnouncement.classList.toggle("pancakeshow");

        pancakeAnnouncement.classList.toggle("pancakehide");
    }
}

function UpdateDates()
{
    GetCurrentYear();
    GetCurrentDate();
    ShowAnnouncement();
}

UpdateDates();