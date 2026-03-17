import Map "mo:core/Map";
import Text "mo:core/Text";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  // Student Data System
  // The 16-digit student number acts as the access key.
  // No IC identity auth needed — the app is used anonymously.
  type StudentData = {
    profileJson : Text;
    quizResultsJson : Text;
    gameResultsJson : Text;
  };

  let studentRecords = Map.empty<Text, StudentData>();

  public shared func saveStudentData(
    studentNumber : Text,
    profileJson : Text,
    quizResultsJson : Text,
    gameResultsJson : Text,
  ) : async () {
    let data : StudentData = {
      profileJson;
      quizResultsJson;
      gameResultsJson;
    };
    studentRecords.add(studentNumber, data);
  };

  public query func getStudentData(studentNumber : Text) : async ?StudentData {
    studentRecords.get(studentNumber);
  };
};
