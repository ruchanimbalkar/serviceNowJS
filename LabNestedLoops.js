//Assignment:Using Nested Loops, create 5 teams of 4 people and assign them unique ids

for (var i = 1; i < 6; i++) {
  gs.info("Team " + i + " created.");
  for (var j = 1; j < 5; j++) {
    gs.info("Member " + j + " added to team " + i);
    var id = "0" + i + "0" + j;
    gs.info("The unique id of this member is " + id);
  }
  gs.info("Four members added to team " + i);
}

//Assignment:Using Nested Loops, create 5 teams of 4 people and assign them unique ids | Teacher's solution
var id = 1;
for (var team = 1; team <= 5; team++) {
  for (var person = 1; person <= 4; person++) {
    gs.info("team=" + team + "person=" + person + "id=" + id);
    ++id;
  }
}
