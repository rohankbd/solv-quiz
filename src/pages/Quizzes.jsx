import { Link } from 'react-router-dom';
import { DesignComponent, Thumbnail } from '../components';
import { useData } from '../hooks';
import { BasicInfo, ContactUs,  Footer } from '../components';

function Quizzes() {
  const { loading, error, data } = useData('topics');

  return (
    <div className='quizzes-page mx-auto flex w-[85%] animate-reveal flex-col justify-center'>
      <h1 className='page-heading'>Attempt Quizzes!</h1>
      {data.length > 0 && (
        <div className='quizzes mx-auto grid w-full grid-cols-quizzes justify-items-center gap-5'>
          {data.map((topic, index) =>
            topic.noq > 0 ? (
              <Link to={`/quiz/${topic.topicID}`} key={topic.topicID}>
                <Thumbnail
                  title={topic.title}
                  id={topic.topicID}
                  noq={topic.noq}
                  type='quiz'
                />
              </Link>
            ) : (
              <Thumbnail
                title={topic.title}
                id={topic.topicID}
                noq={topic.noq}
                key={index}
                type='quiz'
              />
            )
          )}
        </div>
      )}
   
        <div >
        <BasicInfo />
        <hr className='mb-3 h-px w-[85%] border-0 bg-dullWhite dark:bg-gray-600' />
        <ContactUs />
        <Footer />
        <DesignComponent />
        </div>

      <div className='error flex items-center justify-center text-center text-xl'>
        {!loading && data.length === 0 && <>Uh oh! No data found!</>}
        {error && <>There was an error!</>}
        {loading && <>Loading ...</>}
      </div>

      <DesignComponent />
      <br />
    </div>
  );
}

export default Quizzes;
