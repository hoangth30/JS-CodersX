
    // Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (ascending order)
    // <0
    function sortNumber(arr) {
        var ascendOrd = arr.sort(function (a, b) {
            return a - b;
        })
        return ascendOrd;
    }

    //Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)

    let arr = [40, 100, 5, 1, 3, 2, 1, 1, 4, 45, 6, 10, -8, 5, 25, 10];
    function sortNumber(arr) {
        var descendOrd = arr.sort(function (a, b) {
            return b - a
        })
        return descendOrd;
    }
    console.log(sortNumber(arr));

    // Sort the objects in the array by age

    var arrAge = [
        {
            name: "Quiet Samurai",
            age: 22
        },
        {
            name: "Arrogant Ambassador",
            age: 100
        },
        {
            name: "Misunderstood Observer",
            age: 2
        },
        {
            name: "Unlucky Swami",
            age: 77
        }
    ]

    function byAge(arr) {
        var ageSort = arr.sort(function (a, b) {
            return a.age - b.age;
        })
        return ageSort;
    }

    console.log(byAge(arrAge));

    // Sort an array alphabetically

    function alphabetical(arr) {
        var alphabetSort = arr.sort(function (a, b) {
            return a.localeCompare(b);
        })
        return alphabetSort;
    }

    console.log(alphabetical(["cat", "dog", "bird", "fish", "buffalo", "rabbit", "mouse", "turtle"]))

    /**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */

    var students = [
        { name: 'A', score: 100 },
        { name: 'B', score: 10 },
        { name: 'C', score: 101 },
        { name: 'D', score: 50 },
        { name: 'E', score: 75 }
    ];


    var nameArr = []
    function getTopStudents(students) {
        var topSts = students.sort(function(a,b){
            return b.score - a.score
        })
        var top3Sort = topSts.slice(0,3)
        var top3Name = top3Sort.map(function(sts){
            nameArr.push(sts.name)
        })
        return nameArr
    }

    console.log(getTopStudents(students))
