
    /**
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/

    var student = {
        name: 'Kai',
        sex: 'Male',
        age: 23
    }

    function showInfo(obj) {
        return obj;
    }

    console.log(showInfo(student))

    /**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

    function removeProp(prop) {
        var student = {
            name: "David Rayy",
            class: "VI",
            rollno: 12
        }
        if (prop in student) {
            delete student[prop];
        }
        return student
    }

    console.log(removeProp('name'))

    /**
     * Viết hàm countProperty để in ra độ dài của một đối tượng
     * @param {object}
     * @return {number}
     * 
     * Example: 
     * var student = {
     *      name: "Jerry", 
     *      age: 14,
     *      role: "student"
     *  }
     * lengthObj(student); // length: 3
    }
    */

    function countProperty(obj) {
        return Object.keys(obj).length;
    }
    console.log(countProperty(student))

    /**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

    function Shape(color, shape, fill) {
        this.color = color,
            this.shape = shape,
            this.fill = fill
    }

    var shape1 = new Shape("red", "rectangle", true);
    var shape2 = new Shape("orange", "triangle", false);
    var shape3 = new Shape("tomato", "circle", true);
