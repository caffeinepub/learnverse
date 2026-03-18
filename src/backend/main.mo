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

  // Extended data with sync timestamp (stored separately to preserve stable var compatibility)
  type StudentDataV2 = {
    profileJson : Text;
    quizResultsJson : Text;
    gameResultsJson : Text;
    lastSyncedAt : Text;
  };

  let studentRecords = Map.empty<Text, StudentData>();
  let studentSyncTimestamps = Map.empty<Text, Text>();

  public shared func saveStudentData(
    studentNumber : Text,
    profileJson : Text,
    quizResultsJson : Text,
    gameResultsJson : Text,
    lastSyncedAt : Text,
  ) : async () {
    let data : StudentData = {
      profileJson;
      quizResultsJson;
      gameResultsJson;
    };
    studentRecords.add(studentNumber, data);
    studentSyncTimestamps.add(studentNumber, lastSyncedAt);
  };

  public query func getStudentData(studentNumber : Text) : async ?StudentDataV2 {
    switch (studentRecords.get(studentNumber)) {
      case null null;
      case (?data) {
        let ts = switch (studentSyncTimestamps.get(studentNumber)) {
          case null "";
          case (?t) t;
        };
        ?{
          profileJson = data.profileJson;
          quizResultsJson = data.quizResultsJson;
          gameResultsJson = data.gameResultsJson;
          lastSyncedAt = ts;
        };
      };
    };
  };

  // Class Groups System
  type ClassGroup = {
    name : Text;
    studentNumbers : Text;
    createdAt : Text;
  };

  let classGroups = Map.empty<Text, ClassGroup>();

  public shared func saveClassGroup(
    classKey : Text,
    name : Text,
    studentNumbers : Text,
    createdAt : Text,
  ) : async () {
    let group : ClassGroup = {
      name;
      studentNumbers;
      createdAt;
    };
    classGroups.add(classKey, group);
  };

  public query func getClassGroup(classKey : Text) : async ?ClassGroup {
    classGroups.get(classKey);
  };
};
