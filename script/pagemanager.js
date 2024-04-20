let announcement_link = document.getElementById("announcement_link");
let blog_link = document.getElementById("blog_link");
let player_list_link = document.getElementById("player_list_link");
let tournament_link = document.getElementById("tournament_link");


let dashboardArea = document.getElementById('dashboard_area');
let blogContainer = document.querySelector('.blog_container');
let player_list_outer_container = document.querySelector('.player_list_outer_container');
let announcement_outer_container = document.querySelector(".announcement_outer_container");
let tournament_outer_container = document.querySelector(".tournament_outer_container");

announcement_link.addEventListener('click', function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    dashboardArea.style.display = 'none';
    blogContainer.style.display = 'none';
    player_list_outer_container.style.display = 'none';
    announcement_outer_container.style.display = 'block';
});

blog_link.addEventListener('click', function (event) {
    event.preventDefault();
    dashboardArea.style.display = 'none';
    player_list_outer_container.style.display = 'none';
    announcement_outer_container.style.display = 'none';
    blogContainer.style.display = 'block';
});
player_list_link.addEventListener('click', function (event) {
    event.preventDefault();
    dashboardArea.style.display = 'none';
    announcement_outer_container.style.display = 'none';
    blogContainer.style.display = 'none';
    player_list_outer_container.style.display = 'block';
});
tournament_link.addEventListener('click', function (event) {
    event.preventDefault();
    dashboardArea.style.display = 'none';
    announcement_outer_container.style.display = 'none';
    blogContainer.style.display = 'none';
    player_list_outer_container.style.display = 'none';
    tournament_outer_container.style.display = 'block';
});


// only date time scoreboard and weather container


document.addEventListener("DOMContentLoaded", function() {

    function showDashboardContent() {
        const containers = document.querySelectorAll('.main_container > div:not(#date_login_area, #dashboard_area, #time_weather_container)');
        containers.forEach(container => {
            container.style.display = 'none';
        });

        document.getElementById('date_login_area').style.display = 'block';
        document.getElementById('dashboard_area').style.display = 'block';
        document.getElementById('time_weather_container').style.display = 'block';
    }

    showDashboardContent();


    const dashboardLink = document.querySelector('.home');
    dashboardLink.addEventListener('click', function(event) {
        event.preventDefault();
        showDashboardContent();
    });
});