// Star Wars karakterlerinin bilgilerini içeren dizi oluşturuyor
const characters = [
  // Luke Skywalker karakteri - ID: 1, Tatooine'den
  {
    "id": 1, // Karakterin benzersiz numarası
    "name": "Luke Skywalker", // Karakterin adı
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg", // Karakterin resim URL'si
    "homeworld": "tatooine" // Karakterin doğduğu gezegen
  },
  // C-3PO karakteri - ID: 2, Tatooine'den
  {
    "id": 2,
    "name": "C-3PO",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    "homeworld": "tatooine"
  },
  // R2-D2 karakteri - ID: 3, Naboo'dan
  {
    "id": 3,
    "name": "R2-D2",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    "homeworld": "naboo"
  },
  // Darth Vader karakteri - ID: 4, Tatooine'den
  {
    "id": 4,
    "name": "Darth Vader",
    "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    "homeworld": "tatooine"
  },
  // Leia Organa karakteri - ID: 5, Alderaan'dan
  {
    "id": 5,
    "name": "Leia Organa",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    "homeworld": "alderaan"
  },
  // Owen Lars karakteri - ID: 6, Tatooine'den
  {
    "id": 6,
    "name": "Owen Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    "homeworld": "tatooine"
  },
  // Beru Whitesun Lars karakteri - ID: 7, Tatooine'den
  {
    "id": 7,
    "name": "Beru Whitesun lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    "homeworld": "tatooine"
  },
  // R5-D4 karakteri - ID: 8, Tatooine'den
  {
    "id": 8,
    "name": "R5-D4",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    "homeworld": "tatooine"
  },
  // Biggs Darklighter karakteri - ID: 9, Tatooine'den
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    "homeworld": "tatooine"
  },
  // Obi-Wan Kenobi karakteri - ID: 10, Stewjon'dan
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    "homeworld": "stewjon"
  },
  // Anakin Skywalker karakteri - ID: 11, Tatooine'den
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    "homeworld": "tatooine"
  },
  // Wilhuff Tarkin karakteri - ID: 12, Eriadu'dan
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    "homeworld": "eriadu"
  },
  // Chewbacca karakteri - ID: 13, Kashyyyk'den
  {
    "id": 13,
    "name": "Chewbacca",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    "homeworld": "kashyyyk"
  },
  // Han Solo karakteri - ID: 14, Corellia'dan
  {
    "id": 14,
    "name": "Han Solo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    "homeworld": "corellia"
  },
  // Greedo karakteri - ID: 15, Rodia'dan
  {
    "id": 15,
    "name": "Greedo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    "homeworld": "Rodia"
  },
  // Jabba Desilijic Tiure karakteri - ID: 16, Tatooine'den
  {
    "id": 16,
    "name": "Jabba Desilijic Tiure",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    "homeworld": "tatooine"
  },
  // Wedge Antilles karakteri - ID: 18, Corellia'dan
  {
    "id": 18,
    "name": "Wedge Antilles",
    "pic": "https://static.wikia.nocookie.net/heroes-and-villain/images/1/15/Wedge_Antilles.png/revision/latest/scale-to-width-down/1000?cb=20221106214301",
    "homeworld": "corellia"
  },
  // Jek Tono Porkins karakteri - ID: 19, Bestine'den
  {
    "id": 19,
    "name": "Jek Tono Porkins",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    "homeworld": "bestine"
  },
  // Yoda karakteri - ID: 20, homeworld bilgisi yok
  {
    "id": 20,
    "name": "Yoda",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    // homeworld özelliği yok - Unknown olarak gösterilecek
  },
  // Palpatine karakteri - ID: 21, Naboo'dan
  {
    "id": 21,
    "name": "Palpatine",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    "homeworld": "naboo"
  }
];

// Karakterlerin homeworld'lerini içeren ayrı dizi (characters dizisiyle paralel)
const homeworld = [
    "tatooine", // Luke Skywalker
    "tatooine", // C-3PO
    "naboo",    // R2-D2
    "tatooine", // Darth Vader
    "alderaan", // Leia Organa
    "tatooine", // Owen Lars
    "tatooine", // Beru Whitesun Lars
    "tatooine", // R5-D4
    "tatooine", // Biggs Darklighter
    "stewjon",  // Obi-Wan Kenobi
    "tatooine", // Anakin Skywalker
    "eriadu",   // Wilhuff Tarkin
    "kashyyyk", // Chewbacca
    "corellia", // Han Solo
    "Rodia",    // Greedo
    "tatooine", // Jabba Desilijic Tiure
    "corellia", // Wedge Antilles
    "bestine",  // Jek Tono Porkins
    undefined,  // Yoda (homeworld bilgisi yok)
];

// HTML'deki "showCharacters" ID'li butonu seçiyor
const showCharactersButton = document.getElementById("showCharacters");
// Butonun arka plan rengini yeşil yapıyor
showCharactersButton.style.backgroundColor = "#a9e984";
// Butonun yazı rengini beyaz yapıyor
showCharactersButton.style.color = "#f4f4f4";

// Karakterlerin gösterilip gösterilmediğini takip eden bayrak
// true: Karakterler gizli, false: Karakterler görünür
let renderStatus = true;
// Kullanıcının seçtiği homeworld'ü saklayan değişken
// null: Henüz seçim yapılmamış
let selectedHomeworld = null;

// Karakterleri ekranda gösteren/gizleyen ana fonksiyon
function renderCharacters() {
    // Karakterlerin gösterileceği HTML container'ını seçiyor
    const showInfo = document.getElementById("showInfo");

    // Eğer karakterler gizliyse, onları göster
    if (renderStatus === true) {
        // Gösterilecek karakterleri başlangıçta tüm karakterler olarak ayarlıyor
        let charactersToShow = characters;
        
        // Eğer bir homeworld seçilmişse, sadece o homeworld'deki karakterleri filtreliyor
        if (selectedHomeworld) {
            // filter() metodu ile seçilen homeworld'e ait karakterleri buluyor
            charactersToShow = characters.filter(character => 
                // character.homeworld varsa VE seçilen homeworld ile eşleşiyorsa
                character.homeworld && character.homeworld.toLowerCase() === selectedHomeworld.toLowerCase()
            );
        }
        
        // Eğer filtrelenmiş karakter listesi boşsa
        if (charactersToShow.length === 0) {
            // "Karakter bulunamadı" mesajı gösteriyor
            showInfo.innerHTML = '<div class="col-12 text-center"><p class="text-white">Seçilen homeworld için karakter bulunamadı.</p></div>';
        } else {
            // Karakterleri card formatında HTML'e dönüştürüyor
            showInfo.innerHTML = charactersToShow.map(character => {
                return (`
                    <div class="col-sm-6 col-md-4 col-lg-3 mb-3 col-card">
                        <div class="card">
                            <img src="${character.pic}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">${character.homeworld || "Unknown"}</p>
                            </div>
                        </div>
                    </div>
                `);
            }).join(""); // map() sonucunu birleştiriyor
        }
        
        // Buton metnini "Karakterleri Gizle" olarak değiştiriyor
        showCharactersButton.innerText = "Karakterleri Gizle";
        // Buton rengini kırmızı yapıyor
        showCharactersButton.style.background = "#ff0000ff";
        
        
    } else {
        // Eğer karakterler görünürse, onları gizle
        // HTML container'ını temizliyor
        showInfo.innerHTML = "";
        // Buton metnini "Karakterleri Göster" olarak değiştiriyor
        showCharactersButton.innerText = "Karakterleri Göster";
        // Buton rengini yeşil yapıyor
        showCharactersButton.style.background = "#a9e984";
        
        
    }

    // Durumu tersine çeviriyor (true ise false, false ise true yapıyor)
    renderStatus = !renderStatus;
}

// Ham homeworld verilerini kopyalıyor
const homeworldsRaw = homeworld;
// Benzersiz homeworld'leri saklayacak boş dizi
const homeworldsUnique = [];

// Ham homeworld dizisini döngüyle geziyor
for (let i = 0; i < homeworldsRaw.length; i++) {
    // Her bir homeworld değerini alıyor
    const item = homeworldsRaw[i];
    
    // Eğer değer null veya undefined ise
    if(item == null){
        // Hiçbir şey yapma, devam et
    } else {
        // Değeri küçük harfe çeviriyor
        const lowerItem = item.toLowerCase();
        // Eğer bu değer benzersiz dizide yoksa
        if (!homeworldsUnique.includes(lowerItem)) {
            // Benzersiz diziye ekliyor
            homeworldsUnique.push(lowerItem);
        }
    }
}

// Benzersiz homeworld'leri final değişkene atıyor
const homeworlds = homeworldsUnique;

// HTML'deki homeworld filter container'ını seçiyor
const homeworldsFilter = document.getElementById("homeworlds-filter-container");

// Benzersiz homeworld'leri radio button olarak HTML'e dönüştürüyor
homeworldsFilter.innerHTML = homeworlds.map((value, index) => {
    return (`
        <div class="form-check" id="myForm">
            <input class="form-check-input" id="homeworld-${index}" type="radio" name="homeworld" value="${value}">
            <label class="form-check-label text-white" for="homeworld-${index}">${value}</label>
        </div>
    `);
}).join(""); // map() sonucunu birleştiriyor

// Homeworld filter container'ına change event listener ekliyor
document.getElementById("homeworlds-filter-container").addEventListener("change", function(event) {
    // Eğer değişen element bir homeworld radio button'ı ise
    if (event.target && event.target.name === "homeworld") {
        // Seçilen homeworld'ü selectedHomeworld değişkenine kaydediyor
        selectedHomeworld = event.target.value;
        // Konsola seçilen homeworld'ü yazdırıyor
        console.log("Seçilen homeworld:", selectedHomeworld);
        
        // Eğer karakterler zaten gösteriliyorsa, seçilen homeworld'e göre güncelle
        if (!renderStatus) {
            // renderCharacters fonksiyonunu çağırıyor
            renderCharacters();
        }
    }
});







