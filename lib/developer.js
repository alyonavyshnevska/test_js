export default class Developer {

  constructor({ name, language }) {
    this.name = name;
      this.language = language;
  }

  getName() {
    return this.name;
  }

  getLanguage() {
    return this.language;
  }

  setName(name) {
    this.name = name;
  }

  setLanguage(language) {
      this.language = language;
  }

  isLanguageValid() {
  if (["nodejs", "python", "java"].includes(this.language)) {
    return true
  } else return false }

  code() {
    return new Promise((resolve, reject) => {
        if(this.isLanguageValid()) {
          resolve(this.formatString());
        } else {
          reject(new Error(`Unsupported language: ${this.language}`));
        }
    });
  }

  formatString() {
    if(this.language === 'nodejs') {
      return `console.log("Hello, ${this.name}!")`
    } else if (this.language === 'java') {
      return `System.out.println("Hello, ${this.name}!")`
    } else if (this.language === 'python') {
      return `print("Hello, ${this.name}!")`
    }
  }
 }
