import { Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";
import { Views } from "../views";

export function MainRoutes(props) {
    return (
        <Layout.MainLayoutV2>
            <Routes>
                <Route path="/mon-cv/creer" element={<Views.ResumeCreateView />} />
                <Route path="/mon-cv/modifier" element={<Views.ResumeEditView />} />
                <Route path="/abonnements" element={<Views.SubscriptionPackListView />} />
                <Route path="/formations" element={<Views.JobTitleListView />} />
                <Route path="/mon-cv" element={<Views.ResumeShowView />} />
                <Route path="/profil" element={<Views.ProfileView />} />
                <Route path="/" element={<Views.DashboardView />}/>
            </Routes>

        </Layout.MainLayoutV2>
    )
}