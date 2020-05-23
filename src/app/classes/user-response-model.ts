export class UserResponseModelWrapper {
    token: string;
    user: UserResponseModel;
}
export class UserResponseModel {
    email: string;
    name: string;
    role: string;
    verified: boolean;
    _id: string;
}