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
    });
  }
  makeQuotes();
});
