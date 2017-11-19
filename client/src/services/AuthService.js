import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// This is how we call the above method:
// AuthService.register({
//   email: 'test@gmail.com',
//   password: '12345'
// })