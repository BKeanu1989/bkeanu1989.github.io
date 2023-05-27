<template>
    <div>
        <form>
            <div v-for="q in questions" :key="q.id" style="margin: 10px 0">
                {{ q.id }}. {{ q.text }}

                <div class="options" v-for="(option,i ) in q.options" :key="i">
                    <label v-if="finished" :for="slugify(option) + q.text[10]" :class="{'green': i  == q.correctIndex, 'red': i == q.chosenAnswer}">{{ getIndexNumberAsAlphabet(i) }}. {{ option }}</label>
                    <label v-else :for="slugify(option) + q.text[10]">{{ getIndexNumberAsAlphabet(i) }}. {{ option }}</label>
                    <input type="radio" :id="slugify(option) + q.text[10]" v-model="q.chosenAnswer" :value="i" />
                </div>
            </div>
            <div class="endresult" v-if="finished">
                You got {{  result }} out of {{ questions.length }} correct.
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref, watch, computed } from 'vue'
const getIndexNumberAsAlphabet = (index) => {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F'
    ];

    return alphabet[index]
}
const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const questions = ref([
    { 
        id: 1,
        text: 'In all low-income countries across the world today, how many girls finish primary school?',
        options: ['20%', '40%', '60%'],
        correctIndex: 2,
        chosenAnswer: null
    },
    { 
        id: 2,
        text: 'Where does the majority of the world population live?',
        options: ['low-income countries', 'middle-income countries', 'high-income countries'],
        correctIndex: 1,
        chosenAnswer: null
    },
    { 
        id: 3,
        text: 'In the last 20 years, the proportion of the world population living in extreme poverty has:',
        options: ['almost doubled', 'remained more or less the same', 'almost halved'],
        correctIndex: 2,
        chosenAnswer: null
    },
    { 
        id: 4,
        text: 'What is the life expectancy in the world today?',
        options: ['50 years', '60 years', '70 years'],
        correctIndex: 2,
        chosenAnswer: null
    },
    { 
        id: 5,
        text: 'There are 2 billion children in the world today, aged 0 to 15 years old. How many children will there be in the year 2100 according to the United Nations?',
        options: ['4 Billion', '3 Billion', '2 Billion'],
        correctIndex: 2,
        chosenAnswer: null
    },
    { 
        id: 6,
        text: 'The UN predicts that by 2100 the world population will have increased by another 4 billion people. What is the main reason?',
        options: ['there will be more children (aged below 15)', 'there will be more adults (aged 15 to 74)', 'there will be more very old people (aged 75 and older)'],
        correctIndex: 1,
        chosenAnswer: null
    },
    { 
        id: 7,
        text: 'How did the number of deaths per year from natural disasters change over the last 100 years?',
        options: ['more than doubled', 'remained about the same', 'decreased to less than half'],
        correctIndex: 2,
        chosenAnswer: null
    },
    { 
        id: 8,
        text: 'There are roughly 7 billion people in the world today.',
        options: ['1 Billion in Europe, 1 Billion in America, 1 Billion in Africa, 4 Billion in Asia', '1 Billion in Europe, 1 Billion in America, 2 Billion in Africa, 3 Billion in Asia', '1 Billion in Europe, 2 Billion in America, 1 Billion in Africa, 3 Billion in Asia'],
        correctIndex: 0,
        chosenAnswer: null
    },
    { 
        id: 9,
        text: 'How many of the world’s one-year-old children today have been vaccinated against some disease?',
        options: ['20%', '50%', '80%'],
        correctIndex: 2,
        chosenAnswer: null
    },
    { 
        id: 10,
        text: 'Worldwide, 30-year-old men have spent 10 years in school, on average. How many years have women of the same age spent in school?',
        options: ['9 years', '6 years', '3 years'],
        correctIndex: 0,
        chosenAnswer: null
    },
    { 
        id: 11,
        text: 'In 1996, tigers, giant pandas and black rhinos were all listed as endangered. How many of these three species are more critically endangered today?',
        options: ['all three of them', 'one of them', 'none of them'],
        correctIndex: 2,
        chosenAnswer: null
    },
    { 
        id: 12,
        text: 'How many people in the world have some access to electricity?',
        options: ['20%', '50%', '80%'],
        correctIndex: 2,
        chosenAnswer: null
    },
    { 
        id: 13,
        text: 'Global climate experts believe that, over the next 100 years, the average temperature will:',
        options: ['get warmer', 'remain the same', 'get colder'],
        correctIndex: 0,
        chosenAnswer: null
    }

])

const result = computed(() => {
    let correctAnswers = 0

    questions.value.forEach((x) => {
        if (x.chosenAnswer === x.correctIndex) {
            correctAnswers += 1
        }
    })

    return correctAnswers
})

const finished = computed(() => {
    return questions.value.every((x) => {
        return x.chosenAnswer !== null
    })
})

</script>
<style scoped>
.green {
    color: green;
}

.red {
    color: red;
}
</style>