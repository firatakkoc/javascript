// O(n^2)

/*
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array
 * has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 * -------------------------------------------------------------
 * İki dizi kabul eden same adında bir fonksiyon yazın.
 * Fonksiyon, dizideki her değer için true döndürmelidir.
 * ikinci dizide karşılık gelen değerin karesine sahiptir.
 * Değerlerin sıklığı aynı olmalıdır.
 * */

// A Naive Solution / Naif Bir Çözüm


function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true;
}

let a = [1, 2, 3, 4];
let b = [9, 1, 4, 4];

console.log(same(a, b));


// İki dizi arr1 ve arr2 alır.
// Eğer arr1 ve arr2 dizilerinin uzunlukları farklıysa, fonksiyon false döndürür.
// Daha sonra, arr1 dizisindeki her bir eleman için, arr2 dizisinde bu elemanın karesinin bulunup bulunmadığı kontrol edilir.
// Eğer arr1 dizisindeki bir elemanın karesi arr2 dizisinde bulunamazsa, fonksiyon false döndürür.
// Eğer bu elemanın karesi arr2 dizisinde bulunursa, bu eleman arr2 dizisinden kaldırılır(splice kullanılarak).
// Tüm arr1 dizisi elemanları için bu kontrol yapıldıktan sonra, eğer hiçbir engelle karşılaşılmazsa, fonksiyon true döndürür.
// Gerçek Hayatta Kullanım:
// Bu tür bir fonksiyon, iki dizi arasında belirli bir matematiksel ilişkinin olup olmadığını kontrol etmek için kullanılabilir.
// Örneğin:
// Bir dizi içindeki sayıların karelerinin diğer bir dizide olup olmadığını kontrol etmek isteyebilirsiniz.
// Bu, matematiksel problemlerde veya algoritma zorluklarında karşımıza çıkabilir.
// Belki bir oyun geliştirirken, bir nesnenin enerjisini ve onun karesini ayrı ayrı saklamak isteyebilirsiniz ve bu fonksiyon, 
// bu iki değerin tutarlı olup olmadığını kontrol etmek için kullanılabilir.
// Ancak, bu fonksiyonun verimliliği en iyi değil.
// Özellikle büyük dizilerde, indexOf kullanımı her adımda O(N) zaman karmaşıklığına sahip olabilir.
// Bu, fonksiyonun genel karmaşıklığını O(N ^ 2) yapar.
// Daha verimli bir yaklaşım için hash tablosu(JavaScript'te bir obje olarak da bilinir) veya benzeri bir veri yapısı kullanmayı düşünebilirsiniz.



// REFACTORED

function same2(arr1, arr2) {
  // İki dizi arasındaki uzunluk kontrolü. Eğer uzunlukları aynı değilse, false dön.
  if (arr1.length !== arr2.length) {
    return false;
  }

  // İki frekans sayacı nesnesi oluştur. Bunlar, dizilerdeki elemanların kaç kere tekrar ettiğini takip etmek için kullanılır.
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // arr1 dizisindeki her elemanın kaç kere tekrar ettiğini takip eden frekans sayacını doldur.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // arr2 dizisindeki her elemanın kaç kere tekrar ettiğini takip eden frekans sayacını doldur.
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // arr1'deki her elemanın karesinin arr2'de bulunup bulunmadığını ve frekanslarının eşleşip eşleşmediğini kontrol et.
  for (let key in frequencyCounter1) {
    // Eğer arr1'deki bir elemanın karesi arr2'de yoksa, false dön.
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // Eğer arr1'deki bir elemanın frekansı ile arr2'deki karesinin frekansı eşleşmiyorsa, false dön.
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  // Tüm kontroller başarılıysa, true dön.
  return true;
}

console.log(same2(a,b));

// ANAGRAMS

/**
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another,
 * such as cinema, formen from iceman.
 */

/**
 * İki dizge verildiğinde, ikinci dizgenin bir dizge olup olmadığını belirleyen bir işlev yazın.
 * İlkinin anagramı.
 * Bir anagram, başka bir kelimenin harflerinin yeniden düzenlenmesiyle oluşturulan bir kelime, ifade veya isimdir,
 * Sinema, buz adamdan formen gibi.
 */