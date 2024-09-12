function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2 style={{ margin: "0" }}>Welcome to the React Quiz!</h2>
      <p className="welcome-text">
        {numQuestions} questions to test your React mastery
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
