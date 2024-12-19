// class Circle {
//  double radius;
//  void set(double x) {
//  radius = x; }
//  void show() {
//  System.out.print(radius + " "); } }
// class MainClass {
//  public static void main(String args[]) {
//  Circle c1, c2 = new Circle();
//  c2.set(5.1);
//  c2.show();
//  c2.set(6.1);
//  c2.show(); }}

// class Arg {
//  public static void main(String argv[]) {
//  String[] MyArg = argv;
//  }
//  void amethod() {
//  System.out.println(argv[1]);
//  }
// }

class Test {
 public static void main(String[] args) {
 Student[] student = new Student[2];
//  student[0].name = "ABC";
 student[0].marks = 'e';
 student[0].section = 'A';
 student[1].name = "DEF";
 student[1].marks = student[0].marks;
 student[1].section = student[0].section;
 Student data = new Student();
 data.print(student[1].marks); } }
class Student {
 String name; int marks; char section;
 void print(int a){
 System.out.println(a); } }