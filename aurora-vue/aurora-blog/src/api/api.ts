import axios from 'axios'

export default {
  // 获取置顶和推荐文章
  getTopAndFeaturedArticles: () => {
    return axios.get('/api/articles/topAndFeatured')
  },
  // 获取所有文章
  getArticles: (params: any) => {
    return axios.get('/api/articles/all', { params: params })
  },
  // 根据分类ID获取文章
  getArticlesByCategoryId: (params: any) => {
    return axios.get('/api/articles/categoryId', { params: params })
  },
  // 根据文章ID获取文章
  getArticeById: (articleId: any) => {
    return axios.get('/api/articles/' + articleId)
  },
  // 获取所有分类
  getAllCategories: () => {
    return axios.get('/api/categories/all')
  },
  // 获取所有Tag标签
  getAllTags: () => {
    return axios.get('/api/tags/all')
  },
  // 获取前十的Tag标签
  getTopTenTags: () => {
    return axios.get('/api/tags/topTen')
  },
  // 根据TagID获取文章
  getArticlesByTagId: (params: any) => {
    return axios.get('/api/articles/tagId', { params: params })
  },
  // 获取所有归档
  getAllArchives: (params: any) => {
    return axios.get('/api/archives/all', { params: params })
  },
  // 用户登录
  login: (params: any) => {
    return axios.post('/api/users/login', params)
  },
  // 保存评论
  saveComment: (params: any) => {
    return axios.post('/api/comments/save', params)
  },
  // 获取评论
  getComments: (params: any) => {
    return axios.get('/api/comments', { params: params })
  },
  // 获取前六条评论
  getTopSixComments: () => {
    return axios.get('/api/comments/topSix')
  },
  // 获取关于信息
  getAbout: () => {
    return axios.get('/api/about')
  },
  // 获取友情链接
  getFriendLink: () => {
    return axios.get('/api/links')
  },
  // 提交用户信息
  submitUserInfo: (params: any) => {
    return axios.put('/api/users/info', params)
  },
  // 根据用户Id获取用户信息
  getUserInfoById: (id: any) => {
    return axios.get('/api/users/info/' + id)
  },
  // 更新用户订阅
  updateUserSubscribe: (params: any) => {
    return axios.put('/api/users/subscribe', params)
  },
  // 发送验证码
  sendValidationCode: (username: any) => {
    return axios.get('/api/users/code', {
      params: {
        username: username
      }
    })
  },
  // 绑定邮箱
  bindingEmail: (params: any) => {
    return axios.put('/api/users/email', params)
  },
  // 用户注册
  register: (params: any) => {
    return axios.post('/api/users/register', params)
  },
  // 搜索文章
  searchArticles: (params: any) => {
    return axios.get('/api/articles/search', {
      params: params
    })
  },
  // 获取相册
  getAlbums: () => {
    return axios.get('/api/photos/albums')
  },
  // 根据相册Id获取相册照片
  getPhotosBuAlbumId: (albumId: any, params: any) => {
    return axios.get('/api/albums/' + albumId + '/photos', {
      params: params
    })
  },
  // 获取网站配置
  getWebsiteConfig: () => {
    return axios.get('/api')
  },
  // qq登录
  qqLogin: (params: any) => {
    return axios.post('/api/users/oauth/qq', params)
  },
  // 报告
  report: () => {
    axios.post('/api/report')
  },
  // 获取说说
  getTalks: (params: any) => {
    return axios.get('/api/talks', {
      params: params
    })
  },
  // 根据Id获取说说
  getTalkById: (id: any) => {
    return axios.get('/api/talks/' + id)
  },
  // 用户登出
  logout: () => {
    return axios.post('/api/users/logout')
  },
  // 根据评论Id获取评论
  getRepliesByCommentId: (commentId: any) => {
    return axios.get(`/api/comments/${commentId}/replies`)
  },
  // 更新密码
  updatePassword: (params: any) => {
    return axios.put('/api/users/password', params)
  },
  // 访问文章
  accessArticle: (params: any) => {
    return axios.post('/api/articles/access', params)
  }
}
