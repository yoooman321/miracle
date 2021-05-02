export const state = () => ({
  isLogin: false,
  userName: '',
  searchText: ''
})
export const mutations = {
  changeisLogin (state, isLoginFlag) {
    state.isLogin = isLoginFlag
  },
  setUserName (state, userName) {
    state.userName = userName
  },
  setSearchText (state, text) {
    state.searchText = text
  }
}
