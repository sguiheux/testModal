import {Component, ViewChild} from '@angular/core';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('modalTemplate')
    public modalTemplate: ModalTemplate<IContext, string, string>;

    title = 'app';

    constructor(public modalService: SuiModalService) {
    }

    public open() {
        const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

        config.closeResult = "closed!";
        config.context = {data: 'hi'};

        this.modalService
            .open(config)
            .onApprove(result => {
                console.log('approved')
            })
            .onDeny(result => {
                console.log('denied')
            });
    }


    public globalConfig: TemplateModalConfig<IContext, string, string>;

    public open2() {
        this.globalConfig = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);
        this.globalConfig.context = {data: 'hi'};
        this.modalService
            .open(this.globalConfig)
            .onApprove(result => {
                console.log('approved')
            })
            .onDeny(result => {
                console.log('denied')
            });
    }
}

export interface IContext {
    data: string;
}
