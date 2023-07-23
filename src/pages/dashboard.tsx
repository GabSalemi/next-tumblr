import DefaultLayout from "@/layouts/defaultLayout"

const Dashboard: React.FunctionComponent = () => {
    
    return <DefaultLayout>
        <div className="container-fluid">

            <section id="main_content">
                <h2>Page Header</h2>
                <hr/>
                <p>This is a paragraph</p>
            </section>
        </div>
    </DefaultLayout>
}

export default Dashboard;