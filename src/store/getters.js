const getters = {
    isConnected: state => state.app.isConnected,
    account: state => state.app.account,
    chainId:state => state.app.chainId
}
export default getters
