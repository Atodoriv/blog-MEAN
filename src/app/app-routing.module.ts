import { Component } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";

const routes: Routes = [
    {   path: '', component: PostListComponent},
    {   path: 'create', component: PostCreateComponent}
];

@Component({
    standalone: true,
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}