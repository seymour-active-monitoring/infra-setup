"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const assertions_1 = require("aws-cdk-lib/assertions");
const ProvisionAws = require("../lib/provision-aws-stack");
test('SQS Queue and SNS Topic Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ProvisionAws.ProvisionAwsStack(app, 'MyTestStack');
    // THEN
    const template = assertions_1.Template.fromStack(stack);
    template.hasResourceProperties('AWS::SQS::Queue', {
        VisibilityTimeout: 300
    });
    template.resourceCountIs('AWS::SNS::Topic', 1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlzaW9uLWF3cy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdmlzaW9uLWF3cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLHVEQUF5RDtBQUN6RCwyREFBMkQ7QUFFM0QsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsRUFBRTtJQUMzQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQixPQUFPO0lBQ1AsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3JFLE9BQU87SUFFUCxNQUFNLFFBQVEsR0FBRyxxQkFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQyxRQUFRLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLEVBQUU7UUFDaEQsaUJBQWlCLEVBQUUsR0FBRztLQUN2QixDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IFRlbXBsYXRlLCBNYXRjaCB9IGZyb20gJ2F3cy1jZGstbGliL2Fzc2VydGlvbnMnO1xuaW1wb3J0ICogYXMgUHJvdmlzaW9uQXdzIGZyb20gJy4uL2xpYi9wcm92aXNpb24tYXdzLXN0YWNrJztcblxudGVzdCgnU1FTIFF1ZXVlIGFuZCBTTlMgVG9waWMgQ3JlYXRlZCcsICgpID0+IHtcbiAgY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbiAgLy8gV0hFTlxuICBjb25zdCBzdGFjayA9IG5ldyBQcm92aXNpb25Bd3MuUHJvdmlzaW9uQXdzU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snKTtcbiAgLy8gVEhFTlxuXG4gIGNvbnN0IHRlbXBsYXRlID0gVGVtcGxhdGUuZnJvbVN0YWNrKHN0YWNrKTtcblxuICB0ZW1wbGF0ZS5oYXNSZXNvdXJjZVByb3BlcnRpZXMoJ0FXUzo6U1FTOjpRdWV1ZScsIHtcbiAgICBWaXNpYmlsaXR5VGltZW91dDogMzAwXG4gIH0pO1xuICB0ZW1wbGF0ZS5yZXNvdXJjZUNvdW50SXMoJ0FXUzo6U05TOjpUb3BpYycsIDEpO1xufSk7XG4iXX0=