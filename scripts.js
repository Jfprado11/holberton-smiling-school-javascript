$(function () {
  function makeQuotes() {
    const request = $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
    });

    request.done((msg) => {
      // $("#load").addClass("loader");
      for (let x = 0; x < msg.length; x++) {
        const container = $(`<div class="carousel-item ml-5 mb-5"></div>`);
        if (x === 0) {
          container.addClass("active");
        }
        const dataIn = `
        <img
          src="${msg[x].pic_url}"
          class="rounded-circle mr-5 mt-5 img-car d-inline-block"
          alt="picture of a person happy ${msg[x].name}"
          width="160"
          height="160"
        />
        <div class="d-inline-block ml-5 info-car">
          <p class="text-white mt-5">
            ${msg[x].text}
          </p>
          <b class="text-white mt-5 d-block">${msg[0].name}</b>
          <i class="text-white">${msg[0].title}</i>
        </div>
        `;
        container.append(dataIn);
        $(".car-inner-quotes").append(container);
      }
      $(".load").removeClass("loader");
      $(".load  a").removeClass("d-none");
    });
  }
  makeQuotes();

  $("#recipeCarousel").carousel({
    interval: 10000,
  });

  $(".car-slides .carsoul-videos .carousel-item").each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }

      next.children(":first-child").clone().appendTo($(this));
    }
  });

  function callTheCard() {
    const request = $.ajax({
      url: "https://smileschool-api.hbtn.info/popular-tutorials",
    });

    request.done((msg) => {
      for (let x = 0; x < msg.length; x++) {
        const container = $(`<div class="carousel-item"></div>`);
        if (x === 0) {
          container.addClass("active");
        }
        const containerStarts = $(`<div class="ratings"></div>`);
        for (let x = 0; x < 5; x++) {
          if (x < msg[x].star) {
            const starOn = $(`<img src="images/star_on.png" alt="star on" width="15" height="15" />`);
            containerStarts.append(starOn);
          } else {
            const starOff = $(`<img src="images/star_off.png" alt="star on" width="15" height="15" />`);
            containerStarts.append(starOff);
          }
        }
        const dataIn = `
      <div class="col-md-4">
        <div class="card mr-2 ml-2">
          <div class="img-video">
            <img src="${msg[x]["thumb_url"]}" class="card-img-top mw-100 mh-100" alt="thumbnail ${msg[x].id}" />
          </div>
          <div class="card-body">
            <h3 class="card-title font-weight-bold">${msg[x].title}</h3>
            <p class="card-text mb-4">${msg[x]["sub-title"]}</p>
            <img src="${msg[x]["author_pic_url"]}" alt="${msg[x].author}" width="30" height="30" class="rounded-circle mr-3" />
            <span class="card-bold-text">${msg[x].author}</span>
            <div class="rating-min-container mt-4 d-flex justify-content-between">
              <span class="card-bold-text">${msg[x].duration}</span>
            </div>
          </div>
        </div>
      </div>
          `;
        container.append(dataIn);
        $(".car-slides .carousel-inner").append(container);
        $(".car-slide .rating-min-container").preapend(containerStarts);
      }
    });
  }
  // callTheCard();
});
