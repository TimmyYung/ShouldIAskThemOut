export const screens = {
    home:{
      text:"Should I ask out my crush?",
      subheading:      
      (       <a 
        href="https://github.com/TimmyYung/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          color: 'lightblue',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}
      >
      By: Timmy Yung
    </a>),
      buttons: [
        { label: "Begin", nextScreen: "main" },
        { label: "[Simplified Version]", nextScreen: "simplified" }
      ]
    },
  
    main: {
      text: "Is your crush seeing someone?",
      buttons: [
        { label: "I don't know", nextScreen: "idk" },
        { label: "No", nextScreen: "no" },
        { label: "Yes", nextScreen: "yes" },
      ]
    },
  
    simplified: {
      text: "Ask yourself these two questions.",
      subheading: "1. What do I want out of this? (Date, hookup, casually date, have kids, etc.) \n 2. Is there any chance my crush will like me back?* \n *Ignore your answer to 2 And you should probably tell them anyways because you never know until you try. Don't let a website tell you what to do.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home"}
      ]
    },
  
    idk: {
      text: "Result: Find out!",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" },
      ]
    },
  
    yes: {
      text: 'Define "seeing"',
      buttons: [
        { label: "They're casually dating someone", nextScreen: "casualsee" },
        { label: "They're hooking up with someone", nextScreen: "hookupsee" },
        { label: "They're in a relationship", nextScreen: "donttellthem" }
      ]
    },
  
    casualsee: {
      text: 'Is it actually casual?',
      buttons: [
        { label: "Yes", nextScreen: "hookupsee" },
        { label: "No", nextScreen: "donttellthem" }
      ]
    },
  
    hookupsee: {
      text: 'Same person or multiple?',
      buttons: [
        { label: "Hooking up with multiple people", nextScreen: "yesdepends" },
        { label: "Same person", nextScreen: "situationship" }
      ]
    },
  
    situationship: {
      text: "Ok so they're in a situationship. What's their role in the situationship?",
      buttons: [
        { label: "They're in a situationship and they're the one who won't commit and is dragging the other person along.", nextScreen: "asshole" },
        { label: "They're in a situationship and they're being dragged along by the other person who won't commit.", nextScreen: "wontcommit" }
      ]
    },
  
    no: {
      text: "How do you know your crush?",
      buttons: [
        { label: "Online", nextScreen: "online" },
        { label: "Through in-person circumstances", nextScreen: "inperson" }
      ]
    },
  
  
    online: {
      text: "Are they a celebrity?",
      buttons: [
        { label: "Yes", nextScreen: "yescelebrity" },
        { label: "No", nextScreen: "datingapp" }
      ]
    },
  
    datingapp: {
      text: "Did you meet them on a dating app?",
      buttons: [
        { label: "Yes", nextScreen: "yesapp" },
        { label: "No", nextScreen: "noapp" }
      ]
    },
  
    noapp: {
      text: "Have you ever met them in real life?",
      buttons: [
        { label: "Yes", nextScreen: "gotellthem" },
        { label: "No", nextScreen: "noirl" }
      ]
    },
    
  
    inperson: {
      text: "How do you know your crush?",
      buttons: [
        { label: "Via friends", nextScreen: "friends" },
        { label: "Through school", nextScreen: "school" },
        // COME BACK TO THESE
        { label: "Through work", nextScreen: "work" },
        { label: "At a third space (coffee shop, bar, airport, supermarket, etc)", nextScreen: "gotellthemshop" }
      ]
    },
  
    friends: {
      text: "How did you meet each other?",
      buttons: [
        { label: "You're friends with your crush.", nextScreen: "friendswithcrush" },
        { label: "You met through friends but not necessarily friends with your crush.", nextScreen: "metthroughfriends" }
      ]
    },
  
    friendswithcrush: {
      text: "Are you and your crush in a friend group together?",
      buttons: [
        { label: "We are friends one on one that isn't a group.", nextScreen: "tellthembutmentally" },
        { label: "You are your crush are in a wider friend group.", nextScreen: "widerfriendgroup" }
      ]
    },
  
    widerfriendgroup: {
      text: "Was your crush ever seeing someone else in your friend group?",
      buttons: [
        { label: "Yes", nextScreen: "yesseeingsomeone" },
        { label: "No", nextScreen: "noseeingsomeone" }
      ]
    },
  
    yesseeingsomeone: {
      text: 'Define "seeing"',
      buttons: [
        { label: "Your crush was casually hooking up with someone else in the friend group.", nextScreen: "yeahhhhhdoit" },
        { label: "Your crush was dating someone else in the friend group.", nextScreen: "datingfriendgroup" }
      ]
    },
  
    datingfriendgroup: {
      text: "How serious was it on a scale of 0 to 5?",
      buttons: [
        { label: "1 to 2. They went on one bad date and are not attracted to each other at all.", nextScreen: "yeahhhhhdoit" },
        { label: "3 to 4. They dated for a couple weeks, didn't ever get serious.", nextScreen: "isitfucked" },
        { label: "4 to 5. They dated very seriously; met each others parents, over 3 months, maybe have a kid and/or pet together, talked about future plans", nextScreen: "isitfucked" }
      ]
    },
  
    isitfucked: {
      text: "Is it f***ed up for you to ask out your friend's ex?",
      buttons: [
        { label: "Calculate", nextScreen: "resultmath" }
      ]
    },
  
    stillhavefeelings: {
      text: "Do either of them still have feelings for each other?",
      subheading: "You might be good but proceed with extreme caution and the willingness to risk your entire friendship.",
      buttons: [
        { label: "Yes/Idk", nextScreen: "yeshavefeelings" },
        { label: "No", nextScreen: "nohavefeelings" }
      ]
    },
  
    yeshavefeelings: {
      text: "Does the potential of getting together with your crush and/or potentially breaking up outweigh the risk of potentially changing the dynamic of the friend group together?",
      buttons: [
        { label: "No", nextScreen: "donttellthem" },
        { label: "Yes", nextScreen: "gotellthem" }
      ]
    },
  
    nohavefeelings: {
      text: "You sure?",
      buttons: [
        { label: "No I'm not sure.", nextScreen: "yeshavefeelings" },
        { label: "Yes I'm sure my crush and their ex do not have any lingering feelings for each other", nextScreen: "yeahhhhhdoit" }
      ]
    },
  
    noseeingsomeone: {
      text: "Does anyone else in your friend group like your crush?",
      buttons: [
        { label: "Yes", nextScreen: "friendgrouplike" },
        { label: "No", nextScreen: "yeshavefeelings" }
      ]
    },
  
    friendgrouplike: {
      text: "Is there any chance your crush could like you back?",
      subheading: "Rather than risking your entire friendship with that third friend, ask yourself, if there anything on the line that's even worth risking for you to completely ruin your friendship with that third person.",
      buttons: [
        { label: "Yes", nextScreen: "yeshavefeelings" },
        { label: "No", nextScreen: "crushnolikeme" }
      ]
    },
  
  
    metthroughfriends: {
      text: "How did you meet your crush?",
      buttons: [
        { label: "You and your crush have a mutual friend.", nextScreen: "friendswithcrush" },
        { label: "Your crush is related to your friend. (Sibling, cousin, etc.)", nextScreen: "related" }
      ]
    },
  
    related: {
      text: "Oh my god. Are they your friend's sibling?",
      buttons: [
        { label: "Yes", nextScreen: "friendsibling" },
        { label: "No", nextScreen: "notfriendssibling" },
      ]
    },
  
    friendsibling: {
      text: "Oh my god. Do you think you like them just because they're your friend's sibling?",
      subheading: "Is it just by proximity or like by some weird mind thing you have a crush on them.",
      buttons: [
        { label: "Yes", nextScreen: "donttellthem" },
        { label: "No", nextScreen: "prospectofbeing" }
      ]
    },
  
    prospectofbeing: {
      text: "Does the prospect of being with your crush outweigh the fact that you may ruin/make awkward (at least for a time) your relationship with your friend.",
      buttons: [
        { label: "Yes", nextScreen: "shitshow" },
        { label: "No", nextScreen: "donttellthem" },
      ]
    },
  
    notfriendssibling: {
      text: "Parent????",
      buttons: [
        { label: "Yes", nextScreen: "notgettinginvolved" },
        { label: "No", nextScreen: "notgettinginvolved" },
      ]
    },
  
    school: {
      text: "Do you see your crush often?",
      buttons: [
        { label: "Yes (e.g. we're in the same classes)", nextScreen: "youactuallylikethem" },
        { label: "No. (e.g. big campus, different majors, etc.)", nextScreen: "gotellthem" },
      ]
    },
  
    youactuallylikethem: {
      text: "Do you actually like them or do you only have a crush on them because you're in forced proximity with them?",
      buttons: [
        { label: "No I actually like them.", nextScreen: "areyouverysure" },
        { label: "I think it's forced proximity.", nextScreen: "dontpurpose" },
      ]
    },
  
    areyouverysure: {
      text: "You're saying you would have a crush on this person even if you didn't have to see them everyday?",
      subheading: "You very sure?",
      buttons: [
        { label: "Uuuuh ok maybe not", nextScreen: "dontpurpose" },
        { label: "Yes", nextScreen: "tellthemmarriage" },
      ]
    },
  
    work: {
      text: "Do you fear being fired?",
      buttons: [
        { label: "Yes", nextScreen: "donttellthem" },
        { label: "No", nextScreen: "worksure" },
      ]
    },
  
    worksure: {
      text: "You sure?",
      buttons: [
        { label: "Yeah I kinda hate my job", nextScreen: "hierarchy" },
        { label: "No I kinda need to pay rent", nextScreen: "donttellthem" },
      ]
    },
  
    hierarchy: {
      text: "Is your crush the same level as you in the work hierarchy?",
      buttons: [
        { label: "Yes", nextScreen: "youactuallylikethem" },
        { label: "No", nextScreen: "diffhierarchy" },
      ]
    },
  
    diffhierarchy: {
      text: "Where are they in the hierarchy?",
      buttons: [
        { label: "They're your superior", nextScreen: "yoursuperior" },
        { label: "You're their superior", nextScreen: "theirsuperior" },
      ]
    },
  
    yoursuperior: {
      text: "Do you just like them because you have a weird thing for authority figures?",
      subheading: "There's only one right option.",
      buttons: [
        { label: "I do have a weird thing for authority figures but that's not the point", nextScreen: "imweird" },
      ]
    },
  
    theirsuperior: {
      text: "Is there any chance at all your crush actually likes you?",
      subheading: "Or is this just some sick power play that will make your crush incredibly uncomfortable for the rest of their limited time working there before they inevitably resign?",
      buttons: [
        { label: "Yes", nextScreen: "hrwillhear" },
        { label: "No", nextScreen: "donttellthem" },
      ]
    },
  
    
  
  
  
  
  
  
  
    // RESULTS
  
    tellthembutmentally: {
      text: "Result: Go tell them!",
      subheading: "But be prepared that it's going to make things pretty awkward if they don't like you. I'm really sorry but you should probably do it anyways for your mental clarity and for your mental health.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    yeahhhhhdoit: {
      text: "Result: Yeaaah do it*",
      subheading: "*So long as your ok with the fact that getting together with your crush and/or potentially breaking up with them may/will change the dynamic of the friend group forever; breaking up the friend group.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    donttellthem: {
      text: "Result: Don't tell them",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    gotellthem: {
      text: "Result: Go tell them!",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    resultmath: {
      text: (result) => `Result: ${result}`,
      buttons: [
        { label: "Calculate Again", nextScreen: "isitfucked" },
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
    
    crushnolikeme: {
      text: "Result: I meaannnn I wouldn't tbh.",
      subheading: "The trade off isn't worth it anyways if your crush isn't gonna like you back. Like you just ruined two relationships in your life.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" },
      ]
    },
  
    shitshow: {
      text: "Result: Uuuuhhhhh tell them but it'll be a shitshow.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" },
      ]
    },
  
    notgettinginvolved: {
      text: "Result: I'm not getting involved in this shitshow. Close this website right now.",
      buttons: [
      ]
    },
  
    dontpurpose: {
      text: "Result: Don't tell them because it's going to ruin the purpose they serve in your life rn.",
      subheading: "Which is like having something interesting to fantasize and crush about when you're like in a boring calculus class. And if you tell them, it's gonna ruin the magic for you and then it's also gonna make 8am on Wednesdays incredible uncomfortable.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    tellthemmarriage: {
      text: "Result: Tell them!",
      subheading: "It will either be the best relationship of your life and you'll be married or make things incredibly awkward and uncomfortable for yourself every day when you're forced to see them.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    imweird: {
      text: "Result: If you do it, there is a 1% chance you'll get a promotion and a 99% chance you'll be fired immediately.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    hrwillhear: {
      text: "Result: HR will hear about this.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    gotellthemshop: {
      text: "Result: Go tell them!",
      subheading: "Because they're a stranger. Maybe it's like a coffee shop that you frequent a lot or like the supermarket that you always go to. Then in which case yeah it would be a little weird if you ask them out and they said no and then you'd probably have to like completely change your shopping places. But like it's not significant enough of a burden or like a significant enough impact in your life potentially that's negative for you to like not do it. Life is short, I think you should just tell them.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    yescelebrity: {
      text: "Result: You can tell them but they're never gonna know about it.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    yesapp: {
      text: "Result: Yeah you should tell them.",
      subheading: "But I assume they already know you like them (assuming you matched and you both swiped right). They at least know that you're physically attracted to them if you matched on a dating app.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    noirl: {
      text: "Result: You can tell them but there's a chance you won't be attracted to them irl.",
      subheading: "In which case, weigh your odds.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    yesdepends: {
      text: "Result: Tell them but it depends what you want out of this.",
      subheading: "Do you just want to hook up with them or be in a long term relationship? In which case, I don't think it's gonna happen at this point in time. I'm so sorry like I don't think it's gonna happen.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    wontcommit: {
      text: "Result: Tell them",
      subheading: "But it's likely they'll be too blinded by that other person to reciprocate your feelings. In which case, it's not even worth it.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    },
  
    asshole: {
      text: "Result: Don't tell them.",
      subheading: "Unless you also want to be in a situationship with this person. Which you probably don't. Maybe you do. But most likely no. And you don't wanna be with this type of person anyways that will put you in a situationship. So I will say don't do it.",
      buttons: [
        { label: "Go back to Home", nextScreen: "home" }
      ]
    }
  
  };