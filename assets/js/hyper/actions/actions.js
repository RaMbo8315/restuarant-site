var reviewLeftClicked = function(state, actions) {
  return ({
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  })
}

var reviewRightClicked = function(state, actions) {
  return ({
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  })
}

var quotePicker = function(state, actions) {
  return ({
    quoteStatus: {
      currentQuote: state.quoteStatus.currentQuote + 1,
    }
  })
}

var quoteReset = function(state, actions) {
  return ({
    quoteStatus: {
      currentQuote: 0,
    }
  })
}


export const actions = {
  reviewLeftClicked,
  reviewRightClicked,
  quotePicker,
  quoteReset
}

