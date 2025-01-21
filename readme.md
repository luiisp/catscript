> (This is a fun project) used to demonstrate how interpreters work.

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/luiisp/catscript/assets/115284250/7cdbfba5-6e0d-4481-8ccc-dc14f4f80519">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/luiisp/catscript/assets/115284250/7cdbfba5-6e0d-4481-8ccc-dc14f4f80519">
    <img alt="CatScript: The world's first high-level programming language for cats"
         src="https://github.com/luiisp/catscript/assets/115284250/7cdbfba5-6e0d-4481-8ccc-dc14f4f80519"
         width="50%">
  </picture>
</div>

# 🍷 Sintaxe
```cat
meow("Hello World!") # print "Hello world!" in the console
```
```cat
pspsps add (x, y)  { # define add function
  x + y # return 15
}
meow(add(10, 5)) # print 15
```
For more usage examples, check the [examples](https://github.com/luiisp/catscript/tree/main/examples) 

# 📦 Installation & Usage
1. **Install the catscript interpreter**
```bash
npm install -g runcat
```
2. **Run the catscript file**
```bash
runcat file.cat
```
Done! 🎉

# 🙀 Syntax Highlighting
![image](https://github.com/luiisp/catscript/assets/115284250/741f84eb-1a8f-4c03-bb48-2e945a332521)

[Acess the Syntax Highlighting Repository](https://github.com/luiisp/catscript-syntax-highlighting)



# 🐈‍⬛ Learn catscript
![SendIT IDE (1)](https://github.com/luiisp/catscript/assets/115284250/c71e3eb1-38bb-4b5c-a34f-ee621c5ea092)

## General
- in catscript, the `#` symbol is used to comment a line
- catscript is case-sensitive
- catscript is whitespace-insensitive
- catscript is a dynamically typed language
- return values are implicit

## Arithmetic operators
- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division
- `%`: Modulus

## Types
> catscript is a dynamically typed language, so you don't need to specify the type of a variable. The interpreter will infer the type based on the value assigned to it.
- `string`: A sequence of characters
- `number`: A numeric value
- `boolean`: A logical value
- `Object`: A collection of key-value pairs

## Native functions
- `meow()`: Print a message in the console
- `timecat()`: Get the current time in ms

## Variables 
To declare a variable, use the `cat` or `staticat` keyword followed by the variable name and the value.
```cat
cat name = "Pedro Luis"
staticat age = 16
```
`cat` variables are mutable, while `staticat` variables are immutable.

> [!IMPORTANT]\
> **in catscript, the ; symbol is only for declaration of variables and not is optional**


## Functions
To declare a function, use the `pspsps` keyword followed by the function name and the parameters.
```cat
pspsps add (x, y) {
  x + y # return
}
```
To call a function, use the function name followed by the parameters (if you have).
```cat
meow(add(10, 5)) # print 15
```
> [!IMPORTANT]\
> **In catscript, the return value is implicit. the last value of the function is returned**


## Objects
To declare an object, use the {} in `cat` keyword or `staticat` followed by the object name and the key-value pairs.
```cat
staticat obj = {
    name:"catscript",
    repo:"https://github.com/luiisp/catscript",
    author:{
        name: "Pedro Luis Dias",
        github: "https://github.com/luiisp/"
    },
    version:"lasted",
};
```

# 💪 Contributing

**We welcome contributions to the catscript project!** If you would like to contribute, **please follow these steps:**

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your desired changes to the codebase.
5. Test your changes to ensure they work as expected.
6. Commit your changes and push them to your forked repository.
7. Submit a pull request to the main i18n4e repository.
   

Please make sure to follow our [contribution guidelines](CONTRIBUTING.md) and adhere to our [code of conduct](CODE_OF_CONDUCT.md) when contributing.
> [!IMPORTANT]\
> Before submitting your PR, ensure that the code is well formatted and follows our requirements



![200w](https://github.com/luiisp/catscript/assets/115284250/8fbf6061-9f54-453b-aaab-de370d116849)
> *Created with ❤️ by [luiisp](https://github.com/luiisp)*

