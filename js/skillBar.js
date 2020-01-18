$(window).bind("scroll", function() {
  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    // The type of chart we want to create
    type: "line",
    // The data for our dataset
    data: {
      labels: [
        "",
        "HTML & CSS",
        "Bootstrap 4",
        "JavaScript",
        "Jquery",
        "Vue.Js",
        "PHP",
        "Node.js",
        "Git",
        "PhotoShop"
      ],
      datasets: [
        {
          label: "Tech Skills",
          backgroundColor: "rgb(66, 134, 244)",
          borderColor: "rgb(255, 255, 255)",
          data: [0, 95, 90, 85, 70, 15, 10, 30, 75, 50]
        }
      ]
    },
    // Configuration options go here
    options: {
      animation: {
        load: "onscroll",
        duration: "3000",
        easing: "easeInOutSine"
      }
    }
  });
  $(window).unbind();
});