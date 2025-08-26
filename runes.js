document.addEventListener("DOMContentLoaded", function() {
    const runeData = [
        { name: "Феху", meaning: "Багатство, достаток, успіх", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZWn0grRUmXE_n0rdkXfvLAE110Mn0yEtw2mOLeLY7ynbwryfsDvR9WXM81MkXs1Wsw4e1XpiqR1_I1W8yjoK-N6ai9mZlLmxZVOoHNJ9p6PSVfB1MRt6-Bg0sgN2zgb_FAHUjR1RxpNWbq50KeDv5SufSSPbchcpYnjb4sMZfRFC_3vTxrEIkYduoJHs/s1600/Fehu.png" },
        { name: "Уруз", meaning: "Сила, витривалість, мужність", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg26W_NEfYL_SNoogB-uRlsHDceLjRtN-EVxHnmQuVapRTWwVC5LY4tZ7uObD-yvnWQ0yYRGjvZwYXXp7fiJxbvQ5NKzO9WLGqCWHlscsS4BxbT-dy6Lty7xSDWLSg2AqZffITKFdFYK_w8ZxAYRY77PoPeuz5_hdTQ2NPAydZ2_IlUql_pcxbkvYKb71Y/s1600/Uruz.png" },
        { name: "Турісаз", meaning: "Захист, конфлікт, катарсис", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG_QJgeQy1_A7q69VCOPRZXIEAA9wZg172IEBnFCpTb1oSg9NZUQKwUmfftJoYEr7go8HjBVDqIXzS25RMyvpXtdc12OZk2QqzXkfNLmX5f2NI-bLXSboJj99_jez9PmZCUpbE3MBQMOtZQIB9a4KR69DBhDJPxJN9_IcK2KlN2RR3kGNdisUxibjbJA/s1600/Thurisaz.png" },
        { name: "Ансуз", meaning: "Спілкування, натхнення", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_rjMmc8X9a5HYInBVpKXcchVCxUWJKQtfu1DwvL8dtlTrOt8FqbjhdEigZ0v-1B-uXUmXefWzj-t7t-13Mk1GABRC3bm77coWcs0xKvmjbiHVkCtlm4LO5i_IlYqv7iIqohyvFrbKAjw39aYve5BEsRo_LTFikwN8v1C5mOiLJ1wieUSQGR0y-2shyRQ/s1600/Ansuz.png" },
        { name: "Райдо", meaning: "Подорож, ритм, рух", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8senRJdLh1lHaPsO9keCTpPaI6tI5vVgJ5ThUck3bJ41owhnjA4g9kVvghmFbl5_kHWl-8dhenHWjiyOZQGtwTs_jTUnjTgfojhPXTWeu6jLseHet3Fh0c8upJDGJj6bnETgDoDO3J3o6g_WHWezvktQL8lJVBZ7qUDoAnwUYiHHPOg7XGfO2cOGX_2Y/s1600/Raido.png" },
        { name: "Кеназ", meaning: "Знання, творчість, світло", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgs0lBqsrb9IkKJvvWRtPirn653Wc5FAxsUdYBVL0a8XdYCrYmNoSR5HRUvRAyhe7uMR7gBESUphpsnOCj4QKoFk0Xs2NFRLLJnfDJn4Bd8LmYalfs7XY8SIv3NH8Sd5E8_xNasLrdLV-a00UrtX6A1pzA-JIkjtfwRMRKvsoGoKnK_0N4W2ahkdywwNOU/s1600/Kenaz.png" },
        { name: "Гебо", meaning: "Дар, партнерство, баланс", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2v8iIvtyOvhxZwNFBA1zj1CF3crxZIZMrLVQUpdLzEjbFfcC4Dz8G7vaOvbbL4qN6FgF6kaaMLlupRrClH8Re2Hspvf5md8LS-67ZwnuZ8YgH9FuHaGqGtDD-cy5h8qJu-5uCyyYn8V-PLV6v8Ndt3NmB6ZVdQgmearAKr_gzBZIIvhbrK2B9z_SZ-K8/s1600/Gebo.png" },
        { name: "Вуньо", meaning: "Радість, гармонія, успіх", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_gJAXfU3QryDU79Ogfgt1U4kTsxL6J3FHEN-eSS0HdMmWb46Ji39NGBjCKHoNrRBS0Pl78A9KaB1MYmPPvKf6TF7kfgFFOwCwrC1wONqsi_1rz6WgQXRE3_QN3Dqf4fuInSDJlKCpyX32r1hA_4nSY7rsOcaT-LwiPAQz9xFv5vOLJVRiRorjqSYjRkM/s1600/Wunjo.png" },
        { name: "Хагалаз", meaning: "Зміна, руйнування, зростання", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWiefZEB9cSRB-EAjC7XV6aBMEyMRbyo_1IDVKMCp8REqOvs-TI5Vb6mV0cmbjqHtT0QY24eW2l4sfCsaIXjfBbp5aTPRM3VglZes8knDoYl8Tzsc14OIDsNaiZFdUehdb2VY-DChkijbFr2d9MtT82m728p8kqOmgJBubgydwv81hYhNaXiAXeczSBP8/s1600/Hagalaz.png" },
        { name: "Наутіз", meaning: "Необхідність, стриманість, терпіння", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLJOA_mb3y90eLgc9hHZJdnyl9oX56jUpWfaxLJJfeOkQT_25ohAO93DTlfxce6FoFxH1Dxmrh7w0XBvhdW83RwQOYgczzUr3NiPfamwqACjlgDldEMrCiYsfAznkOKH_RC6T0YHcrC7uuR9bOv864YJ-v9gMbR-jzf6pYeqBmBqXPdvDk5DPFweW_Ik/s1600/Nauthiz.png" },
        { name: "Іса", meaning: "Спокій, затримка, інтроспекція", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCod91FX1nPnDZ692WjvGdV6_-i3gVlvubcHGoMAlqwQhg8QvtMTqnXapxtsPgv20oDjbIpcI4LTcLD1M5Aeo5QTnAREamguwP58XQbOsmjViHdFDe9ljd_5bt3r0RVo54wrx6P5EiN8Utz7OCtp4lbQHh-XLTu4C0p_iFBgmENt2-mLgJ7zttbLYzJ8A/s1600/Isa.png" },
        { name: "Йера", meaning: "Жнива, цикл, винагорода", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDbCKUtXjaKt_Sw_1QP1pXnJUm7OAwrUYitkhPb5Qx3XvtbBrqiUEivscb8JQPpE6V7IU9qzMikF3AuSDA9heJWYGS497qdKVtkRkpTUYomFekwNGCsz6UpnYpJ3ZBuOyRcCB9hraucimbLLy4KfXrn3VRk436ufxqtgXQ98AVAIUEE3py3IdIaN9XpF4/s1600/Jera.png" },
        { name: "Ейваз", meaning: "Захист, зв’язок, витривалість", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjelKIAZmvEIAaL_NKlT0zopsEmowAsM0Chc8JwNsgmcokdo6EVpedydtjSgy_ycdQcvnUeURW72sv2E3yLJIDwtLjyJ43zpYxnMDMpTneef1SRtG0E6JP6S0WfR1h_1AaFgMjpmDnbUDwvkhuMOJxRjObvYcmTs-sJ7BvP1cCtH_ZGBaZfou3KVt4KjVE/s1600/Eihwaz.png" },
        { name: "Перт", meaning: "Таємниця, доля, випадок", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgla5w_7L3VDxETJ6ocMNvVK4PpwgYlimkSsZ5_M1F8X3nkTRQNqyBX0d0XXtIXTS3sc21aZIMgEEt3wInyt0oJb9Zuljq-Njf-7agMS6708v4L-YJIzuoJsxvENbwjhlTTbUGXZLSXCq9bu5zgWJ0yMfiD1Nif1F37fY3FRr2UAamA-rzH20UlS7mxH4g/s1600/Perthro.png" },
        { name: "Альгіз", meaning: "Захист, духовність, вищі сили", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmxtsjIN4fthSHQLyNYJ7MXdcsoGEJ1mfIqsyf_00g1XYyhttxyOOgZViO3UbMK3ZQ2_idDhEEjGCXde9qjOTiOwb_7LffFnkoE0GMrhiuiLxz166SGtGE59VczruVMm4TyIvQljp6HSISJ1K0hQ-KZtmipaQmHbVYR5-d9A6amG_tOM0-DkOhgKWZE/s1600/Algiz.png" },
        { name: "Соулу", meaning: "Сонце, енергія, успіх", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoB3_Rx2HtbBjQ2SuZaPK7ugXghqHTA0ozyVdGNXbqpM4xpiCok_CHVicjdtJu7qQPyyUVhgcyCNvG-uz8_YAH1ho2m51nqUpCdRnIbaecQaaCmvHJicbuDuAelctJAdgz6hyphenhyphengd4ohxdoTuq0fChkb43K6OHOtQiHDXDqfy1AL4sKGByj0xHV8jIDkNDY/s1600/Sowilo.png" },
        { name: "Тейваз", meaning: "Справедливість, мужність, честь", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTCD4dKdszO6fR8iDOpI2TO7VgMGS0_PPQKl5xekqGmO5rthd6GMWx5NBusfnxIU6Mhf0GJaZdMqD11lXPOqp3Sr1HJBHygk8-TZZiEAfiymS_BHhNP7hNo4CGaUsSUhyDSQfq2PYH9WC4mZFVlqD03FwVO-Qklkr87pACXlcdnc1IKyh2897-BsMTHso/s1600/Tiwaz.png" },
        { name: "Беркана", meaning: "Ріст, відродження, родина", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4ie5R9mt7s0YlmHj7WKywFdUne7zqI-uINj-NrSgxAVYCKtRtRpsVR2WpsYVMaXtNWw1IeJoITTTOjkqfkEFCRtHr9wai-2nVNE5_FFmPe1d3NEvrw8MTxdjMdkKROrBC9SrsTERfx9sTef6m0lokIWSnMJzewMWQGUYjJjmClWOlF1lBkTwkrvwfY_U/s1600/Berkana.png" },
        { name: "Еваз", meaning: "Рух, співпраця, прогрес", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpnF2DHFTabzdTUUXs39VVU9i7OJrldnbPTNVC75VeZ5weikbiA6frAdRXLhZKf_EmCH920Tv-sgMxTHbYnF3jX4f0mACXBUmR0801f87z8wXhdT83SsoHoLvee7azMCgBiHbyqNP5zNwi14kRKFI8tRZuC1x46s3aSqoGTsvxNw3tnRIlAQWKvK-auaI/s1600/Ehwaz.png" },
        { name: "Манназ", meaning: "Людина, спільнота, розум", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigaPHtkrAiRRgpfB2-afeUlREJtDElOpmKJ8ZySlKwMSuy4xmlZnbDptjWfaXrwYg2enXTnQLnp4FL8ibBnVWl5IhllvgJ6RnGCPVEeU3fqUeFKkoBhQpG3L2BRzkv5k8sTvtEtVKPZzSjwVrzuEBab23UJ50rnQZI1ywBEASFpDkvLNdP-gdbGw2lJgU/s1600/Mannaz.png" },
        { name: "Лагуз", meaning: "Вода, інтуїція, потік", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtt_zw4FmBRnP4ErEU_RDdO5Z0ewi_I0OaMoZtFmX3h-0vgp6-lSmlweuqYGOQfdvYrVhY8Ec33mhzeJbiu-FEjNbevSpDxaZxJUa_Lfx6_Xmk4ME5ci0Af5W8H0dUOeaCkbXxlv2p364-POXRahseyKN2-D7NUuL5xNSwAgHt6hKW0VD0pDxlAf7HMsM/s1600/Laguz.png" },
        { name: "Інгуз", meaning: "Родючість, мир, завершення", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjyFKF8_Y1NZ9P6A2mXGG4zZLArMqRNNrNvtKJpKHMkVHrNLi4wJPvTuBZ_hUyGT5Le2OAQ7V4o1ySZlt5QnCKZk5GXP60CQXcVsKJ8Dyr3wZv0Jzb0yN8ymrmavMukO7AiT3QySVUacbijA_mfgfh-oPt2-4L7BqBtpNT_vErg6e2_dAhkcdbFbz648U/s1600/Ingwaz.png" },
        { name: "Отала", meaning: "Спадщина, дім, традиції", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRgpwveV-lS8TNPpm36nuVWpO7dIRV_FbunoVo6fMomL3SwjnSY28SXNcQdNCkdYgqNKTyiVydsAl0Aw6Hwh7OzjcbghL1YZuVkEU2AUT00y1UUobSkFQv2kf5Tv-mGv87Ofr_porSQnvixVahxVwhCbKpa2gtnB1D97ts36puGVMXviPsZ9NLAzpWQqk/s1600/Othala.png" },
        { name: "Дагаз", meaning: "Прорив, світло, трансформація", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgO7R27UHdxwN_y_PImhy64RQ-u37k_gxnZnWGRppnqwQuXRArGBREL3S2SDtpOTmSyI4192suPGt265IQji-EOgKvGjVxoqV9zLSyA4gNYibbSHb_vUgBoKf1-KNcvEMugXgMmWuIB1DDFqQPu5pUwwYV9XqOjg2cYixA8bejXjCcHzdXUa5EhUymzE0c/s1600/Dagaz.png" }
    ];

    const runeResult = document.getElementById("runeResult");
    const runeText = document.getElementById("runeText");
    const drawButton = document.getElementById("drawButton");

    drawButton.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * runeData.length);
        const selectedRuneData = runeData[randomIndex];
        const existingImage = document.getElementById("runeImage");
        if (existingImage) {
            existingImage.remove();
        }
        const newRuneImage = document.createElement("img");
        newRuneImage.id = "runeImage";
        newRuneImage.src = selectedRuneData.url;
        newRuneImage.alt = selectedRuneData.name;
        newRuneImage.style.maxWidth = "100px";
        newRuneImage.style.height = "auto";
        newRuneImage.style.marginTop = "20px";
        runeResult.insertBefore(newRuneImage, runeText);
        runeText.textContent = `${selectedRuneData.name}: ${selectedRuneData.meaning}`;
    });
});