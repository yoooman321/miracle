export default ({ route, store, redirect }) => {
  if ((route.name === 'subscriptions' || route.name === 'channels') && !store.state.isLogin) {
    return redirect('/')
  }
}
