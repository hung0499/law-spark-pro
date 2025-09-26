import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Target, 
  Award, 
  BookOpen,
  Brain,
  Scale,
  BarChart3,
  Calendar,
  Trophy,
  Zap,
  CheckCircle2,
  Clock,
  Star
} from "lucide-react";

const Progress = () => {
  const skillProgress = [
    { 
      skill: "Knowledge & Recall", 
      current: 85, 
      target: 90,
      level: "Advanced",
      sessions: 34,
      averageScore: 82,
      trend: "+5%"
    },
    { 
      skill: "Factual Analysis", 
      current: 72, 
      target: 80,
      level: "Intermediate",
      sessions: 28,
      averageScore: 75,
      trend: "+8%"
    },
    { 
      skill: "Doctrinal Analysis", 
      current: 90, 
      target: 95,
      level: "Advanced",
      sessions: 31,
      averageScore: 88,
      trend: "+3%"
    },
    { 
      skill: "Critical Evaluation", 
      current: 68, 
      target: 75,
      level: "Intermediate",
      sessions: 22,
      averageScore: 71,
      trend: "+12%"
    },
  ];

  const achievements = [
    { title: "First Steps", description: "Complete your first AI session", earned: true, date: "2 weeks ago" },
    { title: "Consistent Learner", description: "Study for 7 consecutive days", earned: true, date: "1 week ago" },
    { title: "Case Master", description: "Achieve 90%+ on 5 case analyses", earned: true, date: "3 days ago" },
    { title: "Critical Thinker", description: "Excel in critical evaluation skills", earned: false, date: null },
    { title: "Legal Scholar", description: "Complete 100 learning sessions", earned: false, date: null },
    { title: "Reasoning Expert", description: "Master all core competencies", earned: false, date: null },
  ];

  const recentSessions = [
    { 
      date: "Today", 
      topic: "Contract Law", 
      skill: "Doctrinal Analysis",
      score: 92, 
      duration: "45 min",
      improvements: ["Strong ratio identification", "Good case distinction"]
    },
    { 
      date: "Yesterday", 
      topic: "Tort Law", 
      skill: "Critical Evaluation",
      score: 78, 
      duration: "35 min",
      improvements: ["Better argument structure needed", "Good policy analysis"]
    },
    { 
      date: "2 days ago", 
      topic: "Criminal Law", 
      skill: "Factual Analysis",
      score: 85, 
      duration: "50 min",
      improvements: ["Excellent issue spotting", "Clear fact synthesis"]
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-serif font-bold mb-2">Your Learning Progress</h1>
        <p className="text-muted-foreground">
          Track your development across core legal reasoning competencies
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Mastery</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">79%</div>
            <p className="text-xs text-muted-foreground">
              +7% this month
            </p>
            <ProgressBar value={79} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              15 this week
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 days</div>
            <p className="text-xs text-muted-foreground">
              Personal best!
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/6</div>
            <p className="text-xs text-muted-foreground">
              Badges earned
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="skills" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="skills">Skill Progress</TabsTrigger>
          <TabsTrigger value="sessions">Recent Sessions</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Competency Development
              </CardTitle>
              <CardDescription>
                Progress across the four core areas of legal reasoning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillProgress.map((skill, index) => (
                <div key={index} className="space-y-4 p-4 border border-border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{skill.skill}</h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <BookOpen className="h-3 w-3 mr-1" />
                          {skill.sessions} sessions
                        </span>
                        <span className="flex items-center">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          {skill.averageScore}% avg
                        </span>
                        <span className="flex items-center text-success">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {skill.trend}
                        </span>
                      </div>
                    </div>
                    <Badge 
                      variant={skill.level === "Advanced" ? "default" : "secondary"}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current: {skill.current}%</span>
                      <span>Target: {skill.target}%</span>
                    </div>
                    <ProgressBar value={skill.current} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      {skill.target - skill.current}% to next level
                    </div>
                    <Button variant="outline" size="sm">
                      Practice This Skill
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Recent Learning Sessions
              </CardTitle>
              <CardDescription>
                Your latest interactions with the AI co-pilot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentSessions.map((session, index) => (
                <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{session.topic}</h4>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                        <Badge variant="secondary" className="text-xs">
                          {session.skill}
                        </Badge>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {session.duration}
                        </span>
                        <span>{session.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{session.score}%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Key Improvements:</h5>
                    <ul className="space-y-1">
                      {session.improvements.map((improvement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle2 className="h-3 w-3 mr-2 text-success" />
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Sessions
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Learning Achievements
              </CardTitle>
              <CardDescription>
                Milestones and badges earned on your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-4 border rounded-lg transition-smooth ${
                      achievement.earned 
                        ? 'border-success bg-success-subtle' 
                        : 'border-border bg-muted/30'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className={`font-semibold ${achievement.earned ? 'text-success-foreground' : 'text-muted-foreground'}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm mt-1 ${achievement.earned ? 'text-success-foreground/80' : 'text-muted-foreground'}`}>
                          {achievement.description}
                        </p>
                        {achievement.earned && achievement.date && (
                          <p className="text-xs text-success-foreground/60 mt-2">
                            Earned {achievement.date}
                          </p>
                        )}
                      </div>
                      <div className={`ml-4 ${achievement.earned ? 'text-success' : 'text-muted-foreground'}`}>
                        {achievement.earned ? (
                          <Star className="h-6 w-6 fill-current" />
                        ) : (
                          <Star className="h-6 w-6" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Progress;