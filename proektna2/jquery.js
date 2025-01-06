$(document).ready(function() {
    // Обработувач за форма за најава
    $("#login-form").on("submit", function(e) {
        e.preventDefault();
        
        const username = $("#username").val();
        const password = $("#password").val();

        // Проверка дали се пополнети полето за корисничко име и лозинка
        if (username && password) {
            // Прикажи поп-ап со успешна најава
            $("#popup-message").text("Успешна најава!");
        } else {
            // Прикажи поп-ап со порака за неуспешна најава
            $("#popup-message").text("Погрешно корисничко име или лозинка!");
        }

        // Прикажи поп-ап
        $("#popup").show(); // користење .show() наместо .css("display", "flex")
    });

    // Затвори поп-ап кога ќе се кликне на копчето
    $("#close-popup").on("click", function() {
        $("#popup").hide(); // користење .hide() наместо .css("display", "none")
    });

    // Пример за обработка на форма за тест возење
    $("#test-drive-form").on("submit", function(e) {
        e.preventDefault();
        const name = $("#name").val();
        const carModel = $("#car-model").val();
        const testDate = $("#test-date").val();

        // Проверка дали сите полиња се пополнети
        if (name && carModel && testDate) {
            // Порака за успешен заказан тест возење
            $("#popup-message").text(`Тест возењето е закажано за ${name} на ${testDate}.`);
        } else {
            // Порака за неуспешен обид (не се пополнети сите полиња)
            $("#popup-message").text("Ве молиме пополнете ги сите полиња!");
        }

        // Прикажи поп-ап
        $("#popup").show();
    });

    // Лајк функционалност за сите тековни слики
    $(".like-btn").on("click", function() {
        const button = $(this);
        button.text(button.text() === "Лајк" ? "Отфрли Лајк" : "Лајк");
    });

    // Коментирај функционалност за сите тековни слики
    $(".comment-btn").on("click", function() {
        const commentInput = $(this).prev(".comment-input");
        if (commentInput.val()) {
            alert(`Коментар: ${commentInput.val()}`);
            commentInput.val("");
        } else {
            alert("Ве молиме внесете коментар.");
        }
    });

    // Кога ќе се кликне копчето "Додади Нова Слика", отвори го прозорецот за избор на фајл
    $("#add-photo").on("click", function() {
        $("#photo-input").click();
    });

    // Додавање на нова слика во галеријата кога ќе се избере од компјутерот
    $("#photo-input").on("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const newPhoto = $("<div>").addClass("instagram-post").html(`
                    <img src="${e.target.result}" alt="Нов пост" width="200" height="200">
                    <button class="like-btn">Лајк</button>
                    <input type="text" placeholder="Коментар..." class="comment-input">
                    <button class="comment-btn">Коментирај</button>
                `);
                $(".instagram-gallery").append(newPhoto);

                // Поврзување на новата слика со лајк функционалност
                newPhoto.find(".like-btn").on("click", function() {
                    const likeButton = $(this);
                    likeButton.text(likeButton.text() === "Лајк" ? "Отфрли Лајк" : "Лајк");
                });

                // Поврзување на новата слика со коментар функционалност
                newPhoto.find(".comment-btn").on("click", function() {
                    const commentInput = newPhoto.find(".comment-input");
                    if (commentInput.val()) {
                        alert(`Коментар: ${commentInput.val()}`);
                        commentInput.val("");
                    } else {
                        alert("Ве молиме внесете коментар.");
                    }
                });
            };
            reader.readAsDataURL(file);
        }
    });

    // Пример за обработка на анкета
    $("#survey-form").on("submit", function(e) {
        e.preventDefault();
        const impressions = $("#impressions").val();
        const rating = $('input[name="rating"]:checked').val();

        if (impressions && rating) {
            // Прикажи поп-ап со порака за успешна испратена анкета
            $("#popup-message").text("Вашата анкета е успешно испратена!");
        } else {
            // Прикажи поп-ап со порака за неисполнети полиња
            $("#popup-message").text("Ве молиме пополнете ги сите полиња!");
        }

        // Прикажи поп-ап
        $("#popup").show();
    });
});

