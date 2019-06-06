export default{ 
    path:'/category',
    name:'category',
    component:()=>import('@/views/category/category'),
    children:[
        {path:'fruit/:flag',name:'fruit',component:()=>import('@/views/category/categoryItem')}
    ]
}