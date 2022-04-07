import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadReviews } from '../store/actions/ReviewActions'

const mapStateToProps = ({ reviewState }) => {
  return { reviewState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReview: () => dispatch(LoadReviews())
  }
}

const Review = (props) => {
  console.log(props, 'REVIEW PROPS')

  const saveName = (e) => {
    setName(e.target.value)
  }

  const saveComment = (e) => {
    setComment(e.target.value)
  }

  const saveRating = (e) => {
    setRating(e)
  }

  

  useEffect(()=>{
    props.fetchReview()
    console.log('test reviews')
  },[])

  return (
    <div>
      {props.reviewState.reviews.map((department) => (
        <ul key={department.id}>
          <Link to={`/departments/${department.id}`}>{department.name}</Link>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
