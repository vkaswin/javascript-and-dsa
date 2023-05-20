export class Developer {
  frameworks: string[] = [];
  skills: string[] = [];

  constructor(public name: string) {}

  addSkill(skill: string) {
    if (this.skills.includes(skill)) throw new Error("Skill Already Exists");
    this.skills.push(skill);
    return this;
  }

  removeSkill(skill: string) {
    let index = this.skills.indexOf(skill);
    if (index !== -1) this.skills.splice(index, 1);
    return this;
  }

  addFramework(framework: string) {
    if (this.frameworks.includes(framework))
      throw new Error("Framework Already Exists");
    this.frameworks.push(framework);
    return this;
  }

  removeFramework(framework: string) {
    let index = this.frameworks.indexOf(framework);
    if (index !== -1) this.frameworks.splice(index, 1);
    return this;
  }

  getSkills() {
    return this.skills.join(",");
  }

  getFrameworks() {
    return this.frameworks.join(",");
  }

  hasSkill(skill: string) {
    return this.skills.includes(skill);
  }
}

const developer = new Developer("elon");

developer
  .addSkill("javascript")
  .addSkill("html")
  .addSkill("css")
  .addFramework("reactjs")
  .addFramework("vuejs")
  .removeSkill("css")
  .removeFramework("vuejs");

console.log(developer.getSkills()); // 'javascript,html'

console.log(developer.getFrameworks()); // 'reactjs'
