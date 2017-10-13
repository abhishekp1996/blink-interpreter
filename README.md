# blink-lang
[BLINK](https://abhishekp1996.github.io/blink/index.html). A simple interpreter based on Javascript.

## Syntax
Syntax to work with Blink.
1. Proper spacing is required between keywords.
2. Each statement should be terminated with semicolon.
3. Last statement should not be terminated with semicolon.

### Keywords
- `use` : The use keyword is used to declare a variable before using it. The variable name follows the identifier rules for Javascript.
- `set` : The set keyword is used to set the value of the variable. It is followed by variable name and the value to be assigned.
- `print` : The print keyword followed by variable name prints out in the output area.
- `if/end` : The conditional statements. If condition is true, the lines under it till `end` keyword is found are executed. If condition is false, the statements until `end` are skipped.

## Usage
Usage until v0.0

### Set a value for a variable
```
use my_Var;
set my_Var 10
```
This sets the value for `my_Var` as 10.

### Print age
```
use age;
set age 20;
print age
```
It prints the value of the age variable.

### If condition
```
use a;
set a 100;
if true;
set a 50;
end;
print a;
```
The if condition requires either a `true` or `false` value. If it is true, it evaluates the statements below it. Otherwise skips them.

Don't forget to put `end;` to get out of the if block.

### ENJOY BLINKING _ | _