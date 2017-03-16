import { Company } from './company/company';
import { Injectable } from '@angular/core';

import { Response, ResponseOptions, RequestMethod } from '@angular/http';  
import { MockBackend } from '@angular/http/testing';

export const MockDb: Company[] = [
    { name: 'A', employeeCount: 100 },
    { name: 'B', employeeCount: 50 }
];

@Injectable()
export class MockService {  
    constructor(private backend: MockBackend) {
        backend.connections.subscribe((c) => {
            switch (c.request.method) {
                case RequestMethod.Get:
                    if (c.request.url.indexOf('company') > 0) {
                        let res = new Response(new ResponseOptions({
                            body: JSON.stringify(MockDb)
                        }));
                        c.mockRespond(res);
                    }
            }
        });
    }
}