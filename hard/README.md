# BANGUN RUMAH TANGGA #
> ⏰ Time Estimation: ~60 mins

Buatlah sebuah function bernama generateHouse yang menerima tiga parameter berupa size, heightDoor, dan widthDoor. function generateHouse akan membuat rumah yang terdiri dari:
  - bagian atap => besarnya diambil dari parameter size
  - bagian kotak bawah => besarnya diambil dari parameter size
  - bagian pintu => besarnya diambil dari heightDoor dan widthDoor

## RULES
  - Kamu boleh membuat function lain yang dapat membantu kamu menyelesaikan masalah
  - Kamu bebas menggunakan built in function apa saja untuk menyelesaikan masalah ini
  - Asumsi untuk parameter lebar pintu selalu ganjil.
  - Untuk parameter lain dapat diinput dengan genap atau ganjil

## RELEASE 0
Buatlah validasi apabila rumah tidak akan bisa dibuat dengan input size kurang dari 5, width door dan height door juga tidak boleh kurang dari 3

**contoh :**
```javascript

generateHouse(4, 5, 5)
// Minimum input value of size is four and minimum  input value of height and width of door are three
```

## RELEASE 1
  Buatlah bagian atap berbentuk segitiga sama sisi yang memiliki tinggi dan sisi dengan simbol `*` seperti contoh dibawah

## RELEASE 2
  Buatlah bagian bawah rumah berbentuk persegi dengan simbol `*` dan didalamnya terdapat juga sebuah pintu bisa berbentuk persegi atau persegi panjang  dengan simbol `#`

## EXAMPLE
```javascript
generateHouse(5, 3, 3)
/*
        *
      *   *
    *       *
  *           *
* * * * * * * * * ==9
  *           *
  *   # # #   *
  *   #   #   *
  * * # # # * * height = 9
*/

generateHouse(7, 4, 3)
/*
          *
        *   *
      *       *
    *           *
  *               *
* * * * * * * * * * * =11
  *               *
  *     # # #     *
  *     #   #     *
  *     #   #     *
  * * * # # # * * * height =11

*/

generateHouse(9, 5, 5)
/*
                *
              *   *
            *       *
          *           *
        *               *
      *                   *
    *                       *
  *                           *
* * * * * * * * * * * * * * * * * =17
  *                           *
  *                           *
  *                           *
  *         # # # # #         *
  *         #       #         *
  *         #       #         *
  *         #       #         *
  * * * * * # # # # # * * * * * height == 17
*/
```
