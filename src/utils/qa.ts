import { IQA } from './interfaces'

// The questions and answers for the FAQ page
export const questionAndAnswers: IQA[] = [
    {
        question: 'What is MACI?',
        answer: 'Minimum Anti-Collusion Infrastructure (MACI) is a base layer for bribery-resistant, secure, and private digital voting.'
    },
    {
        question: 'Why does the ceremony use a CLI?',
        answer: "A browser-based environment isn't suitable for large contributions since it doesn't take advantage of each contributor's local hardware to compute the contributions. On the other hand a CLI allows to make full use of a contributor's hardware."
    },
    {
        question: 'Who can contribute',
        answer: "Anyone with a GitHub account that follows the coordinator's guidelines can contribute to MACI's ceremony."
    },
    {
        question: 'Why should I contribute?',
        answer: 'By participant in this ceremony you are contributing to the security of the MACI protocol. The reason why ceremonies try to involve as many contributors as possible is because there needs to be at least one honest party that disposes of the toxic waste (private material generated duing a contribution), for the circuits to be secured. Therefore, the more people contributing, the higher the chances that at least one is honest.'
    },
    {
        question: 'What are the risks and considerations?',
        answer: 'You should consider that your device might overheat and possibly freeze should it not have enough memory or processing power. You should also consider that your device might not have enough disk space to store the contribution.'
    },
    {
        question: 'What is p0tion?',
        answer: 'You could think p0tion as a toolkit for effortlessy running Trusted Setup Phase 2 ceremonies for multiple circuit.'
    }
]
