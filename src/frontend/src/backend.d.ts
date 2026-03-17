export interface StudentData {
    quizResultsJson: string;
    gameResultsJson: string;
    profileJson: string;
}
export interface backendInterface {
    getStudentData(studentNumber: string): Promise<StudentData | null>;
    saveStudentData(studentNumber: string, profileJson: string, quizResultsJson: string, gameResultsJson: string): Promise<void>;
}
