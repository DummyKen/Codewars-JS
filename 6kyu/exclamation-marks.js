// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"
function balance(left,right){
  //coding and coding....
  let leftScore = 0;
  let rightScore = 0;
  for(let i of left){
    if(i == '!') leftScore += 2;
    if(i == '?') leftScore += 3;
  };
  for(let i of right){
    if(i == '!') rightScore += 2;
    if(i == '?') rightScore += 3;
  };
  if(leftScore > rightScore) return 'Left';
  else if(leftScore < rightScore) return 'Right';
  else return 'Balance';
}
