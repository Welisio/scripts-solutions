// 1)Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// function a (str) {
//     return str.indexOf('.')
// }

// 2)İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// function b (str) {
//     var str = prompt('Please enter your text')
//     str = str.split('').reverse().join('')
//     alert('Reversed text: ' + str)
//     return false
// }

// 3)Qrup yoldaşları massivi yaradın və onun üzərində əməliyyatlar aparın.
// Üç qrup yoldaşının adlarından ibarət massiv yaradın;
// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
// İlk adı silin;
// Massivi konsola çıxarın.

// var groupMates = ['Mirai','Jason','Michael']
// groupMates.push('Jack')
// groupMates.shift()
// console.log(groupMates)

// 4)Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.
// '32, 31, 34, 36, 31' mətni verilmişdir;
// İçindəki vergülləri nöqtəli vergüllə əvəz edin.

// var modifiedStr = '32, 31, 34, 36, 31'.replaceAll(',',';')


// 6)Massiv üzərində əməliyyatlar aparın.
// 10 ədəddən ibarət massiv yaradın.
// İlk 2 ədədi dəyişənlərə yazın və qalanlardan yeni massiv yaradın.
// var arr = [1,2,3,4,5,6,7,8,9,10]

// var first = arr[0]
// var second = arr[1]

// var arr2 = []
// for (let i = 2; i < arr.length; i++) {
//     arr2.push(arr[i])
// }
// console.log(arr2)

// 7)Massivin maksimal dəyərini tapın.
// 10 rəqəmdən ibarət massiv yaradın.
// Massiv deyil, arqumentlər qəbul edən Math.max funksiyasından istifadə etmeyerek onların arasında maksimumu tapın.
// spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.

// var arr = [1,2,3,4,5,6,7,8,9,10]
// function a (q,w,e,r,t,y,u,i,o,p) {
//     let arr2 = [q,w,e,r,t,y,u,i,o,p]
//     let maxVal = 0
//     for (i = 0; i < arr2.length; i++) {
//         if (arr2[i - 1]) {
//             if (arr2[i] > arr2[i - 1]) maxVal = arr2[i]
//         }
//     }
//     return maxVal
// }

// 8)Massivin bütün elementlərinin dəyərin ikiqat artırın.
// 5 rəqəmdən ibarət massiv yaradın.
// Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
// Orijinal massivin dəyişmədiyini yoxlayın.

var arr = [1,2,3,4,5]
var arr2 = arr.slice(0)

arr2.forEach(el => {
    el = el*2
})
console.log(arr2)