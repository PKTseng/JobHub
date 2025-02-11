import ClockLoader from 'react-spinners/ClockLoader'

const Spinners = ({ loading }) => {
  const override = {
    display: 'block',
    margin: '12px auto',
  }

  return <ClockLoader color="#267490" cssOverride={override} loading={loading} size={100} speedMultiplier={1.5} />
}

export default Spinners
