import styled from "@emotion/styled";

const Paragraph = styled('p')((theme) => ({
    direction: 'ltr',
    textAlign: 'left'
}))

const ListItem = styled('li')((theme) => ({
    direction: 'ltr',
    textAlign: 'left'
}))
export const English = () => {
  return (
    <div className="page-container" style={{ direction: 'ltr', textAlign: 'left'}}>
      <div className="content">
        <div className="text-content">
          <Paragraph>
            Interestingly, English has fewer native speakers than Chinese, but there are about one billion learners of English all around the world. They learn English as an international language.
          </Paragraph>
          <Paragraph>
            About fifty percent of the world’s languages have fewer than 5000 speakers. In the beginning of the twenty-first century, 204 languages had fewer than 10 speakers and 344 languages had between 10 and 99 speakers. The 548 languages with fewer than 99 speakers make up nearly 8 percent of the world’s languages. We call them ‘endangered languages’. As the speakers of such languages grow old and die, their languages will die, too.
          </Paragraph>
          <Paragraph>
            All languages are really valuable, despite their differences. Every language is an amazing means of communication that meets the needs of its own speakers. It is impossible to imagine the world without language. Therefore, we should respect all languages, no matter how different they are and how many speakers they have.
          </Paragraph>
        </div>
        <div className="reading-strategy">
          <h2>Reading Strategy</h2>
          <h3>Scanning</h3>
          <Paragraph>
            You can scan a reading passage to look for and find specific information quickly such as a number, a name, a word, or a phrase. Follow these steps to scan:
          </Paragraph>
          <ul>
            <ListItem>Make a clear picture in your mind of the information you are looking for.</ListItem>
            <ListItem>Look for that information.</ListItem>
            <ListItem>Move your eyes quickly across the text. Don’t read every word. When you find the information, stop, read the sentence and mark the information.</ListItem>
          </ul>
        </div>
        <div className="reading-comprehension">
          <h2>Reading Comprehension</h2>
          <div className="comprehension-section">
            <h3>A. Scan the passage for the following numbers. Match them with the information. There is one extra number.</h3>
            <p>
              a. 548 b. 2250 c. 8 d. 1300 e. 204
            </p>
            <ul>
              <ListItem>1. The number of languages with speakers fewer than 10</ListItem>
              <ListItem>2. The percent of endangered languages</ListItem>
              <ListItem>3. The number of languages with speakers fewer than 99</ListItem>
              <ListItem>4. The number of languages in Oceania</ListItem>
            </ul>
          </div>
          <div className="comprehension-section">
            <h3>B. Scan the passage for the proper nouns.</h3>
            <ul>
              <ListItem>a) The language with more than one billion learners: _______________</ListItem>
              <ListItem>b) The continent with one thousand languages: _______________</ListItem>
              <ListItem>c) The language with the largest number of native speakers: _______________</ListItem>
            </ul>
          </div>
          <div className="comprehension-section">
            <h3>C. Scan the passage and answer the following questions.</h3>
            <ul>
              <ListItem>a) How many languages are there in the world? _______________</ListItem>
              <ListItem>b) What is the number of endangered languages? _______________</ListItem>
              <ListItem>c) Which continent has the largest number of languages in the world? _______________</ListItem>
            </ul>
          </div>
          <div className="comprehension-section">
            <h3>D. Read the sentences; put T for true and F for false. If a sentence is false, correct it.</h3>
            <ul>
              <ListItem>a) Through languages, people can exchange only knowledge. T ○ F ○</ListItem>
              <ListItem>b) When a language has no speaker, it dies out. T ○ F ○</ListItem>
              <ListItem>c) Only a few languages can meet the needs of their own speakers. T ○ F ○</ListItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};