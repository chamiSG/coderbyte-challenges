// Example Data
let strArr = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]

// Result

function WordSplit(){
  // First Element, with single string   
  let wordToCompare = strArr[0]
  // Second Element, with single string   
  let strDictionary = strArr[1]

  // Array of split strings   
  let singleStrings = strDictionary.split(',')
  // Hold Answers   
  let answerWords = ""

  singleStrings.map((firstWord) => {

    let splitMainWordArray = wordToCompare.split(firstWord)

    if(splitMainWordArray.length > 0){

      splitMainWordArray.map((word)=>{

        let joinedWord = firstWord + word
        let reversedWord = [joinedWord].reverse().toString()

        if(joinedWord === wordToCompare || reversedWord === wordToCompare){
          answerWords = "" + firstWord + ", " + word + ""
        } else {
          return 'Not Possible'
        }
      })
    }
  })

  return answerWords
}