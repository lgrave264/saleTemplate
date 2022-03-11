

const start = async() => {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    await Product.create(jsonProducts)
    console.log('Success!!!!')
    process.exit(0)
}

start()