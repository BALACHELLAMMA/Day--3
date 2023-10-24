// . Write a javascript function to return number of occurance of a particular word in a sentence
// For example:
// findNumberOfOccurance(“be kind whenever possible. kindness is what matters”, “kind”);
// Will return an output of 2 ( 2 occurance of kind in the string )


 function count(sentence, word) 
    {
    if (typeof sentence!=='string' || typeof word!=='string') return 'Enter Valid Sentence or Word'
    
    if (sentence.length==0 || word.length == 0)  return 'Empty sentence or word not accepted'
    
       //'g' is used to check the word matches globally 
       // 'i' is used for case-insentivity
       
       return (sentence.match(new RegExp(word, 'gi')) || []).length;
    
    }
 
    const sentence = "be kind whenever possible. kindness is what matters";
    
    console.log(count(sentence, ''));
    console.log(count('','kind'))
    console.log(count(sentence, 'matter'));
    console.log(count(sentence, 'kind'));
    console.log(count(sentence, 'kindness'));
    console.log(count(sentence, true));
    console.log(count(sentence,'hello'))



















    // const result = sentence.match(new RegExp(word,'gi'));
    // let count=0
    
    // for (let index=0; index<result.length; index++){
    //     const currentIndexWord = result[index]
       
    //     if (result.match(new RegExp(currentIndexWord,'gi')))
    //     {
    //         count++;
    //     }
    // }

    // return count;





  