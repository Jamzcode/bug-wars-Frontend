import { defineStore } from 'pinia'

export const useInstructionStore = defineStore('instructionStore', {
  state: () => ({
    instructions: [
      {
        id: '1',
        name: 'OBJECTIVE',
        description:
          'Bug wars is a Battle Royale where players create a command script for their bug to be pitted against other bugs. In an effort to be the last species standing, bugs will attack one another, food and each other, to increase their numbers and take over the battleground before the turn counter expires. The species with the most specimens when time runs out wins!'
      },
      {
        id: '2',
        name: 'BATTLEFIELD',
        description:
          'Each BATTLEFIELD is a different environment and thus provide your species with a unique challenge. Species scripts that work for one battleground will have a different result in a different environment. ',
        elements: 'All battlefields are comprise of these four elements: ',
        Battlefield: {
          OpenSpace:
            ' - These spaces are unoccupied and a bug can move freely through this environment. Attack and Eat commands are ineffective on these squares.',
          Bugs: ' - Like your unique species, opponent bugs are programmed according to premade scripts allowing for unique behavior. Each bug’s main objective is to attack opposing bugs and reproduce itself to victory.',
          Walls:
            ' - Physical barriers found throughout the battle field that obstruct your bug’s movement towards food and other bugs. Attack, Eat and Move commands will have no effect on these spaces and will result in a spent turn.',
          Food: ' - Food is also located throughout the battlefield and provides your bugs with the opportunity to increase their numbers. Executing the EAT command on a food element will spawn +1 bugs to your species. Bugs attacked using the ATTACK command will consequently become food and can then be eaten to generate more of your bug’s species.'
        }
      },
      {
        id: 3,
        name: 'SCRIPT EDITOR',
        description:
          'The SCRIPT EDITOR functions as a compiler for user-input code, converting commands into bytecode values to be interpreted by your bug species. User input is entered into the upper half green section of the script editor. Once ready to be compiled, press the GENERATE button to convert into bytecode. Scripts can be uniquely named and using the CONFIRM button. Scripts may also be saved by pressing the SAVE button after the command list has been processed. These scripts can be saved as is or later modified for use in future battles through the species selector.'
      },
      {
        id: 4,
        name: 'SPECIES SCRIPTS',
        description:
          'Scripts are how you code your species’ unique behavior. Generating your species script will make use of the following elements:'
      },
      {
        id: 5,
        name: 'Syntax',
        syntax: {
          comments:
            'COMMENTS are lines prefixed with an omission symbol (#) and will not be converted into bytecode when the script is generated. Comments will not be executed by your species’ script.',
          labels:
            'LABELS such as EAT or ATTACK will act as markers for your script to jump to when executing a CONTROL STATEMENT. LABELS are made distinguishable using numbers, capital letters, and underscoring.',
          actionStatements:
            'ACTION STATEMENTS are moves executed when a bug encounters food, enemy, wall, or an open space. When the specific element is encountered according to your action statement, the script will jump to it’s respective label and execute the presented code.',
          controlStatements:
            'CONTROL STATEMENTS use a LABEL to determine where to go next in your species’ script and are conditionally executed based on their purpose and context.'
        }
      }
    ]
  })
})
